// JS String Length
// A propriedade 'length' retorna o tamanho da string:
let txt = "Olá!"
let length = txt.length
console.log(length)

// Extracting String Parts
// Temos 3 métodos para extrair partes de uma string: slice, substring e substr

// Slice - extrai a parte de uma string e retorna a parte estraída em uma nova string
// O método leva 2 parâmetros: A posição inicial, e a posição final (o fim não é incluído)
let txtHello = "Olá, mundo!"
let txtSlice2Params = txtHello.slice(0, 3)
txtSlice2Params
// Se você passar apenas um parâmetro, o slice irá pegar até o fim da string
let txtSlice1Param = txtHello.slice(5)
txtSlice1Param
// Se você passar valores negativos, ele irá começar a contar a partir do fim da string
let txtSlice2NegativeParams = txtHello.slice(-11, -8)
txtSlice2NegativeParams
let txtSlice1NegativeParams = txtHello.slice(-6)
txtSlice1NegativeParams

// Substring - é bem similar ao slice, a diferença é que os valores iniciais e finais que são menores que 0, são tratados como 0
let txtSubstring = txtHello.substring(-1, 3)
txtSubstring

// Substr - é similar ao slice, a diferença é que o segundo parâmetro específica o "length" da parte extraída
let txtSubstr = txtHello.substr(0)
txtSubstr

// Replacing String Content

// Replace - o método troca um valor especificado com outro valor em uma string
// ele não muda o valor original, por isso, caso precise usar o valor alterado em mais de um lugar,
// é aconselhável você atribuir o valor a uma variável.
console.log(txtHello.replace("Olá", "Oi"))
txtHello

// Por padrão, o replace substitui apenas a primeira ocorrência, 
// para que substitua todas, precisamos usar a flag /g das expressões regulares

let duplicatedString = "Please visit Microsoft and Microsoft!"
let replaceOneDuplicated = duplicatedString.replace("Microsoft", "W3Schools")
replaceOneDuplicated

let replaceAllDuplicated = duplicatedString.replace(/Microsoft/g, "W3Schools")
replaceAllDuplicated
duplicatedString.replace(/MICROSOFT/ig,"W3Schools");

// JS String Concat()

// Concat - Junta duas ou mais strings, tem o mesmo resultado que usar o +
let text1 = "Hello"
let text2 = "World"
let text3 = text1.concat(" ", text2, "!")
text3

// JS String trim()

// trim - remove espaço em branco de ambos os lados da string
let spacedString = " Olá, me chamo Gabriel, e vc? "
spacedString
let noSpaceString = spacedString.trim()
noSpaceString

// Extracting String Characteres

// charAt - Retorna o caracter do índice espeficado na string
let text = "HELLO WORLD";
let char = text.charAt(0);
char

// charCodeAt - Retorna o unicode do índice especificado na string
let charCode = text.charCodeAt(0);
charCode

// JS String Split
// split - Converte uma string em um array

let txtArray = text.split(" ")
txtArray