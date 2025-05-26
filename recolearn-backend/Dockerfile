# Usa la imagen oficial de Python 3.10 con sistema operativo slim
FROM python:3.10

# 1. Instala dependencias esenciales para OpenMP y compilación
RUN apt-get update && apt-get install -y \
    build-essential \
    libgomp1 \       
    gcc \            
    && rm -rf /var/lib/apt/lists/*


# 3. Copia el proyecto e instala dependencias
WORKDIR /recolearn
COPY . .
RUN pip install --no-cache-dir -r requirements.txt

ENV FLASK_APP=app.main
ENV FLASK_RUN_HOST=0.0.0.0

EXPOSE 5000

CMD ["flask", "run"]