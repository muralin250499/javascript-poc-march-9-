const i1=document.getElementById("n1"); 
const i2=document.getElementById("n2");
 const but=document.getElementById("add");
 const but1=document.getElementById("table-body");
 let id=1;
 let i_id=null;
array=[];
but.addEventListener("click",add);
function add()
{
    if(i_id)
    {
        array=array.map(obj=>{
            if(obj.id===i_id)
            {
                obj.name=document.getElementById("n1").value;
                obj.email=document.getElementById("n2").value;
            }
            return obj;
        });
        updateval(null,'Add');
    }
    else{
        var obj={};
        obj.id=id++;
        obj.name=i1.value;
        obj.email=i2.value;
        array.push(obj);
    }
        common();
}


function Edit1(s_id)
{
    let obj1=array.find(obj=>obj.id===s_id);
    if(obj1){
    i1.value=obj1.name;
    i2.value=obj1.email;
    }
    updateval(s_id,'update');
}



function clearbox()
{
    document.getElementById("n1").value='';
    document.getElementById("n2").value='';
}




function common()
{
    let rows=' ';
    array.forEach((obj)=>{
        const tr=`<tr>
        <td>${obj.id}</td>
    <td>${obj.name}</td>
    <td>${obj.email}</td>
    <td><a href="javascript:void(0)" onClick="Edit1(${obj.id})">Edit</a>
    <a href="javascript:void(0)" onClick="removeItemsById(${obj.id})">delete</a></td>
    <td></td>
    </tr>`;
    rows+=tr;
    });
    but1.innerHTML=rows;
    clearbox();
}


function updateval(id,text)
{
    i_id=id;
    but.innerHTML=text;
}



function removeItemsById(obj) {
    array=array.filter(array=>array.id!=obj);
    common();
}


//       var obj={};
//       obj.id=id++;
//       obj.name=i1.value;
//       obj.email=i2.value;

//    const but1=document.getElementById("table-body");
//    array.push(obj);
//    let rows=' ';
//    array.forEach((obj)=>{
//     const tr=`<tr>
//     <td>${obj.id}</td>
//     <td>${obj.name}</td>
//     <td>${obj.email}</td>
//     <td><a onClick="Edit1(${obj.id})">Edit</a>
//     <a onClick="removeItemsById(${obj.id})">delete</a></td>
//    <td></td>
//    </tr>`;
// rows+=tr;
// });
// but1.innerHTML=rows;
//     }
//     else{

//         array=array.map(obj=>{
//             if(obj.id===i_id)
//             {
//                 obj.name=document.getElementById("n1").value;
//                 obj.email=document.getElementById("n2").value;
//             }
//             return array;
//         })
//         const but1=document.getElementById("table-body");
//         let rows=' ';
//         array.forEach((obj)=>{
//             const tr=`<tr>
//             <td>${obj.id}</td>
//         <td>${obj.name}</td>
//         <td>${obj.email}</td>
//         <td><a onClick="Edit1(${obj.id})">Edit</a>
//         <a onClick="removeItemsById(${obj.id})">delete</a></td>
//         <td></td>
//         </tr>`;
//         rows+=tr;
//         });
//         but1.innerHTML=rows;

//     }









// function update(s_id)
// {
//     ename=document.getElementById('n1').value;
//     eemail=document.getElementById('n1').value;
//     array.forEach((obj)=>
//     {
//         console.log(obj.id);
//     if(obj.id===s_id)
//     {
//         obj.name=ename;
//         obj.email=eemail;
//     }
//     });
// }













