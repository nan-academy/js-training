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
document.body.append(div)

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

// .append also works to add text content
div.append('some string to display')

// you can mix and add multiple elements in one go:
document.body.append('some text', div, 'and more text')
// here we sandwitched our div between some text, nice.

// we can change text content of an element
div.textContent = 'some text'
// this will create a text node and replace all the previous by it

// never use `innerHTML` to set text in a dom, it's unsafe.
// read more: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#Security_considerations


// Events:
// they allow you to react to user inputs
// it's the foundation of the interactivity of your website
// each of them are link to an element or the window

// for this example we will take a button:
const button = document.querySelector('button')

// we need to create a function, let's call it handle click
const handleClick = event => {
  // those functions recieve a special event object argument
  // it's content change depending of the event but you should
  // always have a target proprerty representing the element
  // that this event was triggered from.
  console.log('element', event.target, 'have been clicked !!')
}

// register the event:
button.addEventListener('click', handleClick)
// here we ask the button too call our handleClick function
// on the 'click' event, so every time it's clicked.

// now if for some reason we want to unregister the event:
button.removeEventListener('click', handleClick)


// TODO: forms, onsubmit, preventDefault, URLSearchParams

// TODO: import / export

// TODO: fetch, dynamic import

// TODO: URL, EncodeURIComponent, history API, onhashchanges
