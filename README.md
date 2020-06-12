# tmoodjs
## Description
A text based mood detection.<br>
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
m.loadTrainingData('es');
<br>
### Mood prediction function
To predict a mood from a text use:<br>
<code>m.guessMood(text);</code>
### Example
<code>var text = 'He finalizado mi rutina de ejercicios';</code><br>
<code>var m = new mood();</code><br>
<code>m.init();</code><br>
<code>m.loadTrainingData('es');</code><br>
<code>var result = m.guessMood(text);</code><br>
<code>console.log(result);</code><br>

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
m.loadTrainingData('es');
<br>
### Función de predicción de estádos de ánimo
Para predecir un estado de ánimo utilice:<br>
<code>m.guessMood(texto);</code>
### Ejemplo
<code>var texto = 'He finalizado mi rutina de ejercicios';</code><br>
<code>var m = new mood();</code><br>
<code>m.init();</code><br>
<code>m.loadTrainingData('es');</code><br>
<code>var resultado = m.guessMood(texto);</code><br>
<code>console.log(resultado);</code><br>
## Nota
Los datos del entrenamiento fueron creados con únicamente 35 frases simples en español y 19.990 iteraciones y con un error de entrenamiento de: 0,012046 
