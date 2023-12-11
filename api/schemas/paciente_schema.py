from pydantic import BaseModel
from typing import Optional, List
from model.paciente import Paciente
import json
import numpy as np


class PacienteSchema(BaseModel):
    """ Define como um novo paciente a ser inserido deve ser representado
    """
    name: str = "Rainier"
    age: int = 28
    sex: int = 1
    cp: int = 3
    trestbps: int = 135
    chol: int = 255
    fbs: int = 0
    restecg: int = 0
    thalach: int = 175
    exang: int = 0
    oldpeak: float = 0.0
    slope: int = 2
    ca: int = 0
    thal: int = 2


class PacienteViewSchema(BaseModel):
    """Define como um paciente será retornado
    """
    id: int = 1
    name: str = "Rainier"
    age: int = 28
    sex: int = 1
    cp: int = 3
    trestbps: int = 135
    chol: int = 255
    fbs: int = 0
    restecg: int = 0
    thalach: int = 175
    exang: int = 0
    oldpeak: float = 0.0
    slope: int = 2
    ca: int = 0
    thal: int = 2
    outcome: int = None


class PacienteBuscaSchema(BaseModel):
    """Define como deve ser a estrutura que representa a busca.
    Ela será feita com base no nome do paciente.
    """
    name: str = "Rainier"


class PacienteDelSchema(BaseModel):
    """Define como um paciente para deleção será representado
    """
    name: str = "Rainier"


class ListaPacientesSchema(BaseModel):
    """Define como uma lista de pacientes será representada
    """
    pacientes: List[PacienteSchema]


def apresenta_paciente(paciente: Paciente):
    """ Retorna uma representação do paciente seguindo o schema definido em
        PacienteViewSchema.
    """
    return {
        "id": paciente.id,
        "name": paciente.name,
        "age": paciente.age,
        "sex": paciente.sex,
        "cp": paciente.cp,
        "trestbps": paciente.trestbps,
        "chol": paciente.chol,
        "fbs": paciente.fbs,
        "restecg": paciente.restecg,
        "thalach": paciente.thalach,
        "exang": paciente.exang,
        "oldpeak": paciente.oldpeak,
        "slope": paciente.slope,
        "ca": paciente.ca,
        "thal": paciente.thal,
        "outcome": paciente.outcome
    }


def apresenta_pacientes(pacientes: List[Paciente]):
    """ Retorna uma lista de pacientes seguindo o schema definido em
        PacienteViewSchema.
    """
    return [apresenta_paciente(paciente) for paciente in pacientes]
