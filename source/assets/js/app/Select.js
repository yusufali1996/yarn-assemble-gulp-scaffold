/*
Replaces all select boxes

Example:
<select name="sample">
  <option value="">Select</option>
  <option value="Alabama">Alabama</option>
  <option value="Alaska">Alaska</option>
</select>
*/

class Select {
  constructor(selectObj) {
    this.selectObj = selectObj;
    this.selectObj.classList.add('is-replaced');

    this.selectChoices = this.selectObj.querySelectorAll('option');

    this.createSelect();
  }

  detectGlobalKey(selectObj) {
    if( window.globalkey == undefined ){
      window.globalkey = '';
      document.addEventListener("keydown", function(event) {
        window.globalkey = event.which || event.keyCode;

        let selectItem = selectObj;

        if ( window.globalkey == '27' ) {
          selectItem.querySelector('.select-btn').checked = false;
          selectItem.querySelector('.select-btn').focus();
        }
      });
    }
  }

  createSelect() {
    let newSelect = document.createElement("div");
    newSelect.classList.add('select-item');
    let selectName = this.selectObj.name.toLowerCase().replace(/ /g,'');
    let sectionName = this.selectChoices[0].text.toLowerCase().replace(/ /g,'');
    let input = document.createElement('input');
    input.value = this.selectChoices[0].text;
    input.classList.add('select-btn');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', selectName+'btn');
    let label = document.createElement('label');
    label.classList.add('select-label');
    label.innerHTML = this.selectChoices[0].text;
    label.setAttribute('for', selectName+'btn');
    newSelect.appendChild(input);
    newSelect.appendChild(label);

    let newSelectUl = document.createElement("ul");
    let randomID = window.guid();
    for( let choiceIndex = 0; choiceIndex < this.selectChoices.length; choiceIndex++ ){
      let newSelectLi = document.createElement("li");
      let input = document.createElement('input');
      let tempName = this.selectChoices[choiceIndex].text.toLowerCase().replace(/ /g,'');
      input.value = this.selectChoices[choiceIndex].value;
      input.setAttribute('name', sectionName);
      input.setAttribute('type', 'radio');
      tempName = selectName+'-'+tempName+'-'+randomID;
      input.setAttribute('id', tempName);
      input.setAttribute('alt', this.selectChoices[choiceIndex].text);
      let label = document.createElement('label');
      label.innerHTML = this.selectChoices[choiceIndex].text;
      label.setAttribute('for', tempName);
      newSelectLi.appendChild(input);
      newSelectLi.appendChild(label);
      newSelectUl.appendChild(newSelectLi);
    }
    newSelect.appendChild(newSelectUl);

    this.newSelectObj = newSelect;

    this.createListeners();

    this.insertAfter(this.selectObj, this.newSelectObj);

    this.detectGlobalKey(this.newSelectObj);
  }

  createListeners() {
    var selectBtn = this.newSelectObj.querySelector('.select-btn');

    // On arrow up and down
    selectBtn.addEventListener("keydown", this.controlMovement);

    // On click outside
    document.addEventListener('mouseup', (e) => {
      var selectList = this.newSelectObj.querySelector('ul');
      if (
        (selectList !== (e.target)
         && selectList.contains(e.target) == false
         && selectList.parentNode.contains(e.target) == false
        )
      ){
        var selectBtn = selectList.parentNode.querySelector('.select-btn');
        selectBtn.checked = false;
      }
    });

    // On select option
    var selectOption = this.newSelectObj.querySelectorAll('ul input');
    for(var i=0;i<selectOption.length;i++){
      selectOption[i].addEventListener("keypress", function(event){
        var key = event.which || event.keyCode;
        var customEvent = document.createEvent('HTMLEvents');
        if (key === 13) { // 13 is enter
          customEvent.initEvent('click', true, false);
          this.dispatchEvent(customEvent);
        }
      });
      selectOption[i].addEventListener("click", function(){
        if (window.globalkey == '38' || window.globalkey == '40'){ // up/down do whats expected
        } else {
          let selectItem = this.parentNode.parentNode.parentNode;
          selectItem.querySelector('.select-btn + label').innerHTML = this.alt;
          selectItem.querySelector('.select-btn').value = this.innerHTML;
          selectItem.querySelector('.select-btn').checked = false;
          selectItem.querySelector('.select-btn').focus();

          let index = [].slice.call(this.parentNode.parentNode.children).indexOf(this.parentNode);
          selectItem.previousSibling.querySelectorAll('option')[index].setAttribute('selected', true);
        }
      });
    }
  }

  controlMovement(event) {
    var key = event.which || event.keyCode;
    var value = this.value;

    if (key === 38 || key === 40) { // up/down
      event.preventDefault();
      this.checked = true;
      var selectInput = this.parentNode.querySelectorAll('ul input');
      var focusIndex = 0;
      for(var selectIndex=0; selectIndex<selectInput.length; selectIndex++){
        if(value == selectInput[selectIndex].value){
          focusIndex = selectIndex;
        }
      }
      selectInput[focusIndex].checked = true;
      selectInput[focusIndex].focus();
    }
  }

  insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
}

export { Select as default };
