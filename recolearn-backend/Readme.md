# Recolearn - Backend

## Entorno de instalacion

1. Para desarrollo 
```bash
docker-compose -f docker-compose-dev.yml up --build
```

2. Para produccion 
```bash
docker-compose docker-compose.yml up --build
```

3. Duplicar el `.env.example` y renombrar uno como `.env` y agregue los dominios 
para los que desea habilitar el uso de la API 
```bash
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:8080
```

## API
La API será expuesta en el puerto `5000`, por lo que podrá acceder en `http://127.0.0.1:5000⁠`
