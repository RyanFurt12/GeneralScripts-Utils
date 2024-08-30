import json

def substituir_param_em_json(data_layer_json):
    def substituir_valores(d):
        if isinstance(d, dict):
            result = {}
            for k, v in d.items():
                if k == 'event':
                    result[k] = v
                else:
                    result[k] = substituir_valores(v) if isinstance(v, (dict, list)) else f"Param({k})"
            return result
        elif isinstance(d, list):
            if len(d) > 0: return [substituir_valores(d[0])]
            else: return []
        else:
            return d

    try:
        json_teste = eval(data_layer_json)
        data_layer = json.loads(json_teste)
        data_layer_modificado = substituir_valores(data_layer)
        json_str = json.dumps(data_layer_modificado, indent=4, separators=(',', ': '))
        return json_str.replace('"',"")

    except json.JSONDecodeError as e:
        print(f"Erro ao analisar JSON: {e}")
        return None

def salvar_em_arquivo(nome_arquivo, conteudo):
    try:
        with open(nome_arquivo, 'w') as arquivo:
            arquivo.write(conteudo)
        print(f"Arquivo '{nome_arquivo}' salvo com sucesso!")
    except Exception as e:
        print(f"Erro ao salvar o arquivo: {e}")

def processar_e_salvar_arquivo(nome_arquivo_entrada, nome_arquivo_saida):
    try:
        with open(nome_arquivo_entrada, 'r') as arquivo:
            conteudo = arquivo.read()
        
        conteudo_modificado = substituir_param_em_json(conteudo)  
        if conteudo_modificado:
            salvar_em_arquivo(nome_arquivo_saida, conteudo_modificado)
        else:
            print("Não foi possível processar o arquivo.")
    
    except Exception as e:
        print(f"Erro ao processar o arquivo: {e}")


data_layer_exemplo = """
{
    event: "Page Note",
    eventAction: "add",'
    eventLabel: "page-1"
}
"""

data_layer_modificado = substituir_param_em_json(data_layer_exemplo)
if data_layer_modificado:
    salvar_em_arquivo('saida.txt', data_layer_modificado)