import React,{useState,useEffect} from 'react'
import './AddItem.css'
import { useDispatch,useSelector } from 'react-redux';
import  {addNewProducts} from '../../actions/productAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function AddItem() {

  const dispatch= useDispatch();
  const [name,setName]=useState('');
  const [desc,setDesc]=useState('');
  const [cat,setCat]=useState('');
  const [Img,setImg]=useState('');
  const [var1,setVar1]=useState('');
  const [var2,setVar2]=useState('');
  const [var3,setVar3]=useState('');
  const[ var1p,setVar1p ]=useState(0);
  const[ var2p,setVar2p ]=useState(0);
  const[ var3p,setVar3p ]=useState(0);

  const { loading, success } = useSelector(state => state.addNewProductsReducer);
  const notify = (callId, msg, timex) => {{
      toast.success(msg, { position: toast.POSITION.TOP_CENTER, autoClose: timex })}
  }
  function reqItemADD(){
  
  if(!var1 || !name || !desc || !cat || !Img || !var1p ){
    toast.info("Fill Properly and First Variant Must Be Filled", {position: toast.POSITION.TOP_LEFT,autoClose: 3000})
    return;
  }

  // if( (!var2 || !var3 || !var2p || !var3p )){
  //   toast.info("Incomplete/Invalid Field is ignored", {position: toast.POSITION.TOP_CENTER,autoClose: 2000})
  // }



  let arrVarients=[var1];
  let arrPrices=new Map(); 
  arrPrices[var1]=parseInt(var1p);
  if(var2){arrVarients.push(var2);  arrPrices[var2]=parseInt(var2p);  }
  if(var3){arrVarients.push(var3); arrPrices[var3]=parseInt(var3p); }

  let xap=[arrPrices]
  // console.log(arrVarients+ "   x  "+JSON.stringify(xap));

  const newItem={

     name,
     category:cat,
     description: desc,
     image:Img,
     varients: arrVarients,
     prices: xap,
   }
   console.log(newItem)
   dispatch(addNewProducts(newItem))
  }


  return (
    <div>       
       <ToastContainer limit={2} containerId="default"/>

       <div class='signup-container'>
  <div class='left-container'>
    <h1>
    <i class="fas fa-project-diagram"></i>
    <h6>Ensure your product  gets the noteworthy attention! </h6>
    </h1>
    <div class='puppy'>
      <img src='https://thumbs.dreamstime.com/z/product-strategy-word-cloud-concept-grey-background-90731260.jpg' />
    </div>
  </div>
  <div class='right-container'>
    <header>
      <hx id='titleatt'>Add your <b>Product</b></hx>
      <div class='set2 set3'>
        <div class='prod-name'>
          <label for='pets-name'>Name</label>
          <input id='prod-name' placeholder="Product's name" type='text'
           value={name}  onChange={(e)=>setName(e.target.value)} required
          />
        </div>
        {/* <div class='pets-photo'>
          <button id='pets-upload'>
            <i class='fas fa-camera-retro'></i>
          </button>
          <label for='pets-upload'>Upload a photo</label>
        </div> */}
      </div>
      <div class='set2'>
        <div class='prod-name'>
          <label for='pets-name'>Description</label>
          <input id='prod-des' placeholder="Product's Description" type='text'
           value={desc}  onChange={(e)=>setDesc(e.target.value)} required
          />
        </div>
      </div>
      <div class='set'>
        <div class='pets-breed'>
          <label for='pets-breed'>Category</label>
          <input id='pets-breed' placeholder="Product Category" type='text'
           value={cat}  onChange={(e)=>setCat(e.target.value)} required
          />
        </div>
        <div class='pets-birthday'>
          <label for='pets-birthday'>Image Permalink</label>
          <input id='pets-birthday' placeholder='link' type='text'
           value={Img}  onChange={(e)=>setImg(e.target.value)} required
          />
        </div>
      </div>
      {
       success && !loading && (notify('reg', "Added Product successfully", 2000))
      }
      <div class='pets-weight'>
      <div class="input ">
       <div class="input-group-prepend vn1">
          <span class="input-group-text " id="vntxt">Varient names</span>
        </div>
        <input type="text" className="form-control " id='nn1' placeholder='Varient 1'
         value={var1}  onChange={(e)=>setVar1(e.target.value)} required
        />
        <input type="text" className="form-control "  id='nn1'placeholder='Varient 2'
        value={var2}  onChange={(e)=>setVar2(e.target.value)} 
        />
        <input type="text" className="form-control " id='nn1' placeholder='Varient 3'
         value={var3}  onChange={(e)=>setVar3(e.target.value)} 
        />
        </div>
          
      </div>

      <div class='pets-weight'>
      <div class="input-group ">
       <div class="input-group-prepend vn1">
          <span class="input-group-text " id="vptxt"> Varient   Prices</span>
        </div>
        <input type="number" className="form-control " placeholder='Price V1'
         value={var1p}  onChange={(e)=>setVar1p(e.target.value)} required

        />
        <input type="number" className="form-control " placeholder='Price V2' 
        value={var2p}  onChange={(e)=>setVar2p(e.target.value)} 
        />
        <input type="number" className="form-control " placeholder='Price V3'
        value={var3p}  onChange={(e)=>setVar3p(e.target.value)} 
        />

      </div>
          
      </div>
    </header>
    <footer>
      <div class='set'>
        <button id='back'   onClick={ ()=> window.location.replace('/')}>Back</button>
        <button id='next' onClick={ reqItemADD }>Next</button>
      </div>
    </footer>
  </div>
</div>

    </div>

  )
}
