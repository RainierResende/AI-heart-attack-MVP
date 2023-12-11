from model.avaliador import Avaliador
from model.carregador import Carregador
from model.modelo import Model

# To run: pytest -v test_modelos.py

# Instanciação das Classes
carregador = Carregador()
modelo = Model()
avaliador = Avaliador()

# Parâmetros
url_dados = "database/heart.csv"
colunas = ['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg',
           'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal', 'output']

# Carga dos dados
dataset = carregador.carregar_dados(url_dados, colunas)

# Separando em dados de entrada e saída
X = dataset.iloc[:, 0:-1]
Y = dataset.iloc[:, -1]

# Método para testar modelo SVM a partir do arquivo correspondente
def test_modelo_svm():
    # Importando modelo de SVM
    svm_path = 'ml_model/modelo_heart_attack.pkl'
    modelo_svm = modelo.carrega_modelo(svm_path)

    # Obtendo as métricas do SVM
    acuracia_svm, recall_svm, precisao_svm, f1_svm = avaliador.avaliar(modelo_svm, X, Y)

    # Testando as métricas do SVM
    assert acuracia_svm >= 0.5
    assert recall_svm >= 0.5
    assert precisao_svm >= 0.5
    assert f1_svm >= 0.5