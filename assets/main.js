// Load from end of HTML without async to avoid putting
// everything in document read handler.

let D = document
let body = D.querySelector('body')
let sidebarButton = D.querySelector('.sidebar-button')
let navLinks = D.querySelector('.nav-links')
let bwtoggle = D.getElementById('bwtoggle')
let subtitle = D.querySelector('h1+h2')

// here so not rendered in Lynx
let copied = D.createElement('div')
copied.style.position = 'fixed'
copied.style.top = '0'
copied.style.right = '0'
copied.style.textAlign = 'center'
copied.style.borderRadius = '0.25rem'
copied.style.zIndex = '200'
copied.style.margin = '0.5rem'
copied.style.padding = '0.25rem 1rem'
copied.innerHTML = ""
copied.style.background = 'black'
copied.style.color = 'white'
//copied.style.width = '200%'
copied.style.display = 'none'
body.appendChild(copied)

// D.onreadystatechange = e => {
//  D.readyState === "complete" && location.hash && scrollBy(0,-20)
// }

// force *all* external links to open new tab
D.querySelectorAll('a[href^="http"]')
  .forEach(l=>l.setAttribute("target","_blank"))

// progressively upgrade to full search if javascript
D.querySelectorAll('a[href*="lite"]')
  .forEach(l=>l.setAttribute('href',l.getAttribute('href').replace('lite','')))

const showCopied = e => {
  copied.style.display = 'block'
  copied.style.opacity = '0.85'
  setTimeout(_=>{
    copied.style.opacity = '0'
    copied.style.display = 'none'
  },1000)
}

addEventListener('click', e => {
  let t = e.target

  if (t.nodeName==='CODE' && t.parentNode.nodeName === 'PRE') {
    t.classList.toggle('zoomed')
    copyToClipboard(t.innerText)
    if (t.classList.contains('zoomed')) {
      showCopied(e)
      copied.innerHTML = "copied code snippet to clipboard"
    }
    return
  }

  // if item is not a header or subtitle, exit
  if (t.nodeName[0] !== 'H' || t === subtitle) return

  // copy link for 
  let base = t.baseURI.split('#')[0]
  let basea = base.split('/')
  let node=basea[basea.length-2]
  if (t.id === node) return

  // TODO add better target validation
  let link = `${base}#${t.id}`
  copyToClipboard('')
  copyToClipboard(link)
  copied.innerHTML = "copied link to clipboard"
  showCopied(e)
})

// convert all h2-h6 tags to links
D.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach((h) => {

  // create URL
  let base = h.baseURI.split('#')[0]
  let basea = base.split('/')
  let node=basea[basea.length-2]
  if (h.id === node) return
  let link = `${base}#${h.id}`

  // create link element to replace into header
  let linkel = D.createElement("a")
  linkel.appendChild(D.createTextNode(h.innerHTML))
  linkel.title = h.innerHTML
  linkel.href = link
  h.innerHTML = ""
  h.appendChild(linkel)
})

// positions links to headers properly
// onhashchange = e => scrollBy(0,-10)

const copyToClipboard = str => {
  const el = D.createElement('textarea')
  el.value = str;
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'               
  el.style.left = '-9999px'
  D.body.appendChild(el)
  const selected =            
    D.getSelection().rangeCount > 0 
      ? D.getSelection().getRangeAt(0)
      : false
  el.select()
  D.execCommand('copy')
  D.body.removeChild(el)
  if (selected) {
    D.getSelection().removeAllRanges()
    D.getSelection().addRange(selected)
  }
}
