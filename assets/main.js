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
copied.style.left = '0'
copied.style.textAlign = 'center'
copied.style.zIndex = '30'
copied.style.padding = '200%'
copied.style.background = 'black'
copied.style.color = 'white'
//copied.style.width = '200%'
copied.style.height = '100%'
copied.style.width = '100%'
copied.style.display = 'none'
body.appendChild(copied)

D.onreadystatechange = e => {
  D.readyState === "complete" && location.hash && scrollBy(0,-70)
}

// force *all* external links to open new tab
D.querySelectorAll('a[href^="http"]')
  .forEach(l=>l.setAttribute("target","_blank"))

// progressively upgrade to full search if javascript
D.querySelectorAll('a[href*="lite"]')
  .forEach(l=>l.setAttribute('href',l.getAttribute('href').replace('lite','')))

const secs2dur = secs => {
  let days = Math.floor(secs / 86400)
  let hours = Math.floor((secs % 86400) / 3600)
  let mins = Math.floor(((secs % 86400) % 3600) / 60)
  let dur
  if (days >=1 ) return `${days}d ${hours}h ${mins}m`
  if (hours >=1 ) return `${hours}h ${mins}m`
  if (mins >=1 ) return `${mins}m`
  return 'now'
}

const age = secs => secs2dur( Math.floor(Date.now()/1000) - secs )

const updateAges = () => {
  let nodes = document.getElementsByClassName('age')
  for (let i = nodes.length; i; i--) {
    let n = nodes[i-1]
    n.innerText = age(n.dataset.secs)
  }
}

onload = updateAges 
setInterval(updateAges, 1000)

const showCopied = e => {
  copied.style.display = 'block'
  copied.style.transition = ''
  copied.style.opacity = '.3'
  let y = e.pageY - copied.offsetHeight/2
  let x = e.pageX - copied.offsetWidth/2
  setTimeout(_=>{
    copied.style.transition = 'opacity .1s'
    copied.style.opacity = '0'
    copied.style.display = 'none'
  },100)
}

addEventListener('click', e => {
  let t = e.target

  if (t.nodeName==='CODE' && t.parentNode.nodeName === 'PRE') {
    t.classList.toggle('zoomed')
    copyToClipboard(t.innerText)
    if (t.classList.contains('zoomed')) {
      showCopied(e)
    }
    return
  }

  if (t.nodeName[0] !== 'H' || t === subtitle) return

  let base = t.baseURI.split('#')[0]
  let basea = base.split('/')
  let node=basea[basea.length-2]
  if (t.id === node) return

  // TODO add better target validation
  let link = `${base}#${t.id}`
  copyToClipboard('')
  copyToClipboard(link)
  showCopied(e)
})

// positions links to headers properly
onhashchange = e => scrollBy(0,-50)

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
