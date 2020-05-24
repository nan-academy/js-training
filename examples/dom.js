/* DOM 4.1: Hell on The Web

  The Document Object Model (DOM) is an API for accessing
  and manipulating documents (in particular, HTML and XML documents)

  To illustrate, consider this HTML document:

  <!DOCTYPE html>
  <html class=e>
    <head><title>Aliens?</title></head>
    <body>Why yes.</body>
  </html>

  It is represented as follows:
  
  Document
   ├ Doctype: html
   └ Element: html class="e"
     ├ Element: head
     │ └ Element: title
     │   └ Text: Aliens?
     ├ Text: ⏎␣
     └ Element: body
       └ Text: Why yes.⏎

  > try it yourself with https://software.hixie.ch/utilities/js/live-dom-viewer/
*/

// A partial js representation would look like:
const dom = {
  nodeName: '#document',
  childNodes: [
    {
      nodeName: 'HTML',
      className: 'e',
      childNodes: [
        {
          nodeName: 'HEAD',
          childNodes: [
            {
              nodeName: 'TITLE',
              childNodes: [{ nodeName: '#text', nodeValue: 'Aliens?' }],
            }
          ],
        },
        { nodeName: '#text', nodeValue: '\n    ' },
        {
          nodeName: 'BODY',
          childNodes: [{ nodeName: '#text', nodeValue: 'Why yes.\n  ' }],
        }
      ],
    }
  ],
}
// the actual DOM has a lot more properties
// you can check them out in your browser console with:
console.dir(document)

// Query elements
// the fastest and simplest way to query is if the element as an id:
const someIdElement = document.getElementById('some-id')
// Id's have to be unique.

// but often you will work with list of elements.
// for simple queries we have 2 usefull selector:

// ...ByTagName
const links = document.getElementsByTagName('a') // find all the <a...>...</a>

// note that, sadly, `links` is not a simple JS array
// it's a NodeList (https://devdocs.io/dom/nodelist)
// to use your beloved map, reduce & filter toolkit with it
// you will have to convert it to a single array like so:
const linksArray = [...links]
console.log(linksArray.map(e => e.tagName)) // ['a', 'a', 'a', ...]

// ...ByClassName
const someClassElements = document.getElementsByClassName('some-class')

// Now for complex cases, we can also get any elements matching a css query:
const someClassLinks = document.querySelectorAll('body > a.some-class')
// and yep, it's a node list too :(

// Sometimes you just want to work with the first result:
const someClassLink = document.querySelector('body > a.some-class')


// Creating an element
const div = document.createElement('div') // the string is the html tag

// you can add it in the body (open your inspector to find it)
document.body.appendChild(div)

// setting properties of an element
div.id = 'my-div'

// changing the inline style
div.style.opacity = 0.5

// working with css classes (https://devdocs.io/dom/element/classlist)
div.classList.add('class-1')
div.classList.add('class-2')
console.log(div.className) // 'class-1 class-2'

div.classList.remove('class-2')
console.log(div.className) // 'class-1'

div.classList.toggle('class-2')
div.classList.contains('class-1') // true
div.classList.contains('class-3') // false

div.classList.replace('class-1', 'class-3')

console.log(div.className) // 'class-3 class-2'

// add text content
// first create a text node
const text = document.createTextNode('some string to display')
// then add it to the div
div.appendChild(text)

// to change the value
text.nodeValue = 'hello, my value changed'

// As you can add multiple text nodes to a div, this allow you
// to selectively update specific parts of your text
// but most of the time it's enough to use the smart property `textContent`:

div.textContent = 'some text'
// this will create a text node and replace all the previous by it

// never use `innerHTML` to set text in a dom, it's unsafe.
// read more: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#Security_considerations


// TODO: import / export

// TODO: addEventListener / removeEventListener, preventDefault

// TODO: forms, onsubmit, URLSearchParams

// TODO: fetch, dynamic import

// TODO: URL, EncodeURIComponent, history API, onhashchanges
