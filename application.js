window.addEventListener('load', () =>{
    var form = document.querySelector('.app-search-container')
    var input = document.querySelector('.search')
    var tasks = document.querySelector('.tasks')
    console.log(form)

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        
        var inputtext = input.value;
        if(!inputtext)
        {
            alert("enter the anything");
            return;
        }

        const task = document.createElement('div');
        task.classList.add("task");

        const content = document.createElement('div');
        content.classList.add("content");
        
        const contentinput = document.createElement('input')
        contentinput.type = "text";
        contentinput.classList.add("content-search");
        contentinput.value = inputtext;
        contentinput.setAttribute('readonly','readonly');

        content.appendChild(contentinput);
        task.appendChild(content);

        const editbtn = document.createElement('button');
        editbtn.classList.add("btns-edit");
        editbtn.innerText = "EDIT";

        const deletebtn =  document.createElement('button');
        deletebtn.classList.add("btns-delete");
        deletebtn.innerText = "DELETE";

        const btns = document.createElement('div');
        btns.classList.add("btns");

        btns.appendChild(editbtn);
        btns.appendChild(deletebtn);
        

        task.appendChild(btns);
        
        tasks.appendChild(task);

        input.value = '';
        input.focus();

        const edit = editbtn.addEventListener('click', () => {
            if(editbtn.innerText == 'SAVE')
            {
                        const store = contentinput.value;
                        contentinput.innerText = store;
                        contentinput.setAttribute('readonly','readonly');
                        editbtn.innerText = 'EDIT';
            }
           else{
                contentinput.removeAttribute('readonly');
                contentinput.focus();
                editbtn.innerText = 'SAVE';    
            }
        })
       
        deletebtn.addEventListener('click', () => {
            alert("are you sure about that, you really want to delete");
            task.remove();
        })
    })
})