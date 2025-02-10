Antes de probarlo 

install i express

Versiones

-node 
v20.15.0
-expres 
express@4.21.2


Para testear el post en thunderclient:
agregar esta ruta

localhost:8080/temperaturas

en el body para probar los errores se prueba que magnitud sea numérico y que unidad sea farenheit, kelvin o celsius
{
  "magnitud": "m",
  "unidad": "farenheit"
}
{
  "magnitud": 10,
  "unidad": "perro"
}

ahora si agregamos verdaderas

{
  "magnitud": 50,
  "unidad": "kelvin"
}

{
  "magnitud": 20,
  "unidad": "celsius"
}

{
  "magnitud": 90,
  "unidad": "farenheit"
}

Para probar el get esta es la ruta que hay que poner

para que arroje errores hay que poner rangos de temperaturas que no agregamos
http://localhost:8080/temperaturas/rango?min=0&max=1

ahora si agregamos según los rangos que agregamos

http://localhost:8080/temperaturas/rango?min=20&max=90
