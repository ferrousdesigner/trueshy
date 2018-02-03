
let p = document.getElementsByClassName('plea')[0]
let q = document.getElementsByClassName('question')[0]
let pointer = 0
let locked = false
let arrChar = ['e', 'l', 'l', ' ', 'm', 'e', ' ', 't', 'r', 'u', 'e', 's', 'h', 'y', ' ', 't', 'h', 'e', ' ', 't', 'r', 'u', 't', 'h', ' ', ' ', ' ', ' ' , ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' , ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
let ans = ''
let arrayOfAnswers = [
  'Do you really want to know that!',
  'I dont think you will be able to handle that!',
  'How can you say so!',
  'Better if I keep my mouth shut!',
  "Don't try to fool me !",
  'This is really insanse',
  'I am not gonna tell you that'
]
p.onkeydown = function (e) {
    e.preventDefault()

    //Logic
    if(p.value.length < 60)
    {
      if(permittedKey(e.key)) {
          if (p.value.length == 0) {
            p.value = p.value + e.key
          }
          else {
            if(locked == true) {
              p.value = p.value + arrChar[pointer]
              pointer++
              ans += e.key
            }
            else {
              p.value = p.value + e.key
            }
          }
      }
      else if (e.key == 'Backspace') {
        if(p.value.length == 0) {
        }
        else if(p.value.length == 1){
          if(locked == true) {
            p.value = p.value.slice(0, -1)
            ans = ans.slice(0, -1)
            pointer = 0
            locked = false
          }
          else {
            p.value = p.value.slice(0, -1)
          }
        }
        else {
          if(locked == true) {
            p.value = p.value.slice(0, -1)
            ans = ans.slice(0, -1)
            pointer--
          }
          else {
            p.value = p.value.slice(0, -1)
          }
        }

      }

      else if(e.key == ',') {
        if(p.value.length == 0) {
            p.value = p.value + 'T'
            locked = true
        }
      }
    }
}

function showAnswer() {
  if(p.value.length > 0 && q.value.length > 0)
  {
   document.querySelector('.btn').style.transform = 'rotateY(90deg)'
   document.querySelector('.loader').style.display = 'block'
   document.querySelector('.loader > div').style.width = '0%'
   setTimeout(function() {document.querySelector('.loader > div').style.width = '100%'},300)
   setTimeout(function(){
     showAnswerNext()},5000)
   }
   else if (q.value.length == 0){
     q.focus()
   }
   else if (p.value.length == 0){
     p.focus()
   }
}

function showAnswerNext () {
  if(locked == true) {
    document.querySelector('.ans-text').innerHTML = ans
  }
  else {
  document.querySelector('.ans-text').innerHTML = arrayOfAnswers[(Math.floor(Math.random() * 7) + 1)]
  }
  setTimeout (function () {
    document.querySelector('.ans-div').classList.add('show-answer')
  }, 1000)

}

 function closeAnswerDiv () {
  ans = ''
  document.querySelector('.ans-div').classList.remove('show-answer')
  document.querySelector('.ans-text').innerHTML = ans
  document.querySelector('.btn').style.transform = 'rotateY(0deg)'
  document.querySelector('.loader').style.display = 'none'
  document.querySelector('.loader > div').style.width = '0%'
  p.value = ''
  q.value = ''
  locked = false
}

function permittedKey (key) {
  var arrayAl = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0']
  for(var i=0 ; i<62 ; i++) {
    if(key == arrayAl[i]) {
      return true
    }
    else {
      false
    }
  }


}
