
# DL to Sheets

Projeto criado com intuito de mapear DataLayers em uma planilha, salvando uma versão de cada push para cada 'event' diferente, e realizando a contagem de eventos iguais.


## Como usar

### Configurando a planilha

Para executar, crie uma planilha, libere o acesso de edição para qualquer pessoa com o link, e clique em:
```bash
    Extensões -> AppsScript
```
Copie o código do repositorio, e informe o link da planilha, e o nome da folha especifica que será utilizada.

Clique em Deploy, e libera o acesso a qualquer um. Não esqueça de copiar o link do deploy.

### Agora no GTM

Crie uma variavel constante, com o link do seu deploy de script.

Crie uma Tag que dispare no carregamente das páginas, com o código do repositorio.

Nesse código, altere a var que guarda o gscriptUrl pela sua variavel do GTM