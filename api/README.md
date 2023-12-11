# Heart Attack Prediction

Este projeto faz parte do MVP da disiciplina de **Qualidade de Software, Segurança e Sistemas Inteligentes** da PUC-Rio 

O objetivo é desenvolver o conteúdo apresentado ao longo das aulas da disciplina.

---
## Como executar 

Será necessário ter todas as libs python listadas no `requirements.txt` instaladas.
Após clonar o repositório, é necessário ir ao diretório raiz, pelo terminal, para poder executar os comandos descritos abaixo.

> É indicado o uso de ambiente virtual do tipo [virtualenv](https://virtualenv.pypa.io/en/latest/installation.html).

### Instale as dependências/bibliotecas, descritas no arquivo `requirements.txt`:
```
(env)$ pip install -r requirements.txt
```

### Execute a API

Para executar a API execute o código abaixo:
```
flask run --host 0.0.0.0 --port 5000
```

Abra o [localhost](http://localhost:5000/#/) no navegador para verificar o status da API em execução.