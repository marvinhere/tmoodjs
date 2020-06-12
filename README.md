# tmoodjs Version Alpha 1.0
## Description
A text based mood prediction.<br>
Simple library to detect a mood from a single text. 
## Install
Add tmoodjs to your html.<br>
<code><script type="text/javascript" src="https://prueba-4eb4d.firebaseapp.com/tmood.js"></script></code>
<br>
## How to use
To start using tmoodjs it is necessary to create an object and initialize the brainjs neuron.<br>
<code>var m = new mood();</code><br>
<code>m.init();</code>
<br>
### Set training data
#### Spanish Training data
<code>m.loadTrainingData('es');</code>
<br>
### Mood prediction function
To predict a mood from a text:<br>
<code>m.guessMood(text);</code>
### Example
<code>var m = new mood();</code><br>
<code>m.init();</code><br>
<code>m.loadTrainingData('es');</code><br>
<br>
<code>var text = 'He finalizado mi rutina de ejercicios';</code><br>
<code>var result = m.guessMood(text);</code><br>
<code>console.log(result);</code><br>

## Integration example

![Integration](images/integration.png)

## Restriction
tmoodjs only works with a text without symbols and extrange characters. (ñ doens't works). Use only lowercase letters.

## Note
Training data was trained with only 35 simple phrases and 19.990 iterations with a training error: 0,012046 

# tmoodjs Español
## Descripción
Detección de estado de ánimos basado en texto.<br>
Librería simple para detectar estados de ánimo en base a un texto. 
## Instalación
Agregar tmoodjs al html.<br>
<code><script type="text/javascript" src="https://prueba-4eb4d.firebaseapp.com/tmood.js"></script></code>
<br>
## Cómo usar
Para empezar a usar tmoodjs es necesario crear un objeto e inicializar la neurona artificial de brainjs.<br>
<code>var m = new mood();</code><br>
<code>m.init();</code>
<br>
### Agregar datos de entrenamiento
#### Datos entrenados en español
<code>m.loadTrainingData('es');</code>
<br>
### Función de predicción de estádos de ánimo
Para predecir un estado de ánimo utilice:<br>
<code>m.guessMood(texto);</code>
### Ejemplo
<code>var m = new mood();</code><br>
<code>m.init();</code><br>
<code>m.loadTrainingData('es');</code><br>
<br>
<code>var text = 'He finalizado mi rutina de ejercicios';</code><br>
<code>var result = m.guessMood(text);</code><br>
<code>console.log(result);</code><br>

## Restricciones
tmoodjs solo funciona con texto sin símbolos y sin caracteres extraños. ( la ñ no funciona). Usar solamente letras minúsculas.

## Nota
Los datos del entrenamiento fueron creados con únicamente 35 frases simples en español y 19.990 iteraciones y con un error de entrenamiento de: 0,012046 

## tmoodjs Licence
MIT License

Copyright (c) 2020 Marvin Josué Quiñónez Xitumul, Joaquín de la Cruz Hernández, José Alejandro García Herrera

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Brainjs Licence
This project use Brainjs. <br>
Copyright (c) 2010-2019 Heather Arthur

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
   
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                                                                
                                                                
