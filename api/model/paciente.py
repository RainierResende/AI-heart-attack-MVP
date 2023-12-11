from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.orm import relationship
from typing import Union

from model import Base


class Paciente(Base):
    __tablename__ = 'pacientes'

    id = Column(Integer, primary_key=True)
    name = Column("Name", String(50))
    age = Column("Age", Integer)
    sex = Column("Sex", Integer)
    cp = Column("ChestPain", Integer)
    trestbps = Column("RestingBloodPressure", Integer)
    chol = Column("Cholesterol", Integer)
    fbs = Column("FastingBloodSugar", Integer)
    restecg = Column("RestingECG", Integer)
    thalach = Column("MaxHeartRate", Integer)
    exang = Column("ExerciseInducedAngina", Integer)
    oldpeak = Column("STDepression", Float)
    slope = Column("Slope", Integer)
    ca = Column("MajorVessels", Integer)
    thal = Column("Thalassemia", Integer)
    outcome = Column("Diagnostic", Integer, nullable=True)

    def __init__(self, name:str, age:int, sex:int, cp:int,
                 trestbps:int, chol:int, fbs:int, restecg:int,
                 thalach:int, exang:int, oldpeak:float, slope:int,
                 ca:int, thal:int, outcome:int):
        """
        Cria um Paciente

        Arguments:
            name: nome do paciente
            age: idade do paciente
            sex: sexo do paciente
            cp: tipo de dor no peito
            trestbps: pressão sanguínea em repouso
            chol: colesterol sérico
            fbs: açúcar no sangue em jejum
            restecg: resultados eletrocardiográficos em repouso
            thalach: frequência cardíaca máxima alcançada
            exang: angina induzida por exercício
            oldpeak: depressão do segmento ST induzida por exercício em relação ao repouso
            slope: a inclinação do segmento ST de pico do exercício
            ca: número de vasos principais coloridos por fluoroscopia
            thal: talassemia
            outcome: diagnóstico
        """
        self.name = name
        self.age = age
        self.sex = sex
        self.cp = cp
        self.trestbps = trestbps
        self.chol = chol
        self.fbs = fbs
        self.restecg = restecg
        self.thalach = thalach
        self.exang = exang
        self.oldpeak = oldpeak
        self.slope = slope
        self.ca = ca
        self.thal = thal
        self.outcome = outcome
