
import './App.css';

function App() {

  
  
  return (
    <div className="App">
       

    
        <section class="ftco-section pt-5">
		<div class="container">
	
			<div class="row justify-content-center">
			    
			  
			    
				<div class="col-md-7 col-lg-5">
					<div class="login-wrap p-4 p-md-5">
		      	<div class="d-flex align-items-center justify-content-center">
		      		<img src='https://hospital.cfcsoftware.com/public/assets/img/images%20(4).jpeg' style={{height: '90px',borderRadius:"15px"}} />
		      	</div>
		      	 
                    
                    
		      	<h3 class="text-center mb-4 text-primary"></h3>
						<form method="POST" action="" id="singnupFrom" >
                       
		      		<div class="form-group">
		      			<input type="text" class="form-control mt-2 p-2rounded-left" placeholder="" name="name" id="name" required/>
		      			
                            <span class="text-danger"></span>
                      
		      		</div>
		      		<div class="form-group">
		      			<input type="number" class="form-control mt-2 p-2rounded-left" placeholder="" name="mobile" id="mobile" required/>
		      			
                            <span class="text-danger"></span>
                       
		      		</div>
		      		<div class="form-group">
		      			<input type="email" class="form-control mt-2 p-2rounded-left" placeholder="" name="email" id="email" required/>
		      		
                            <span class="text-danger"></span>
                        
		      			
		      		</div>
	                <div class="form-group d-flex">
	                  <input type="password" class="form-control mt-2 p-2rounded-left" placeholder="" name="password" id="password" required/>
	                    
                            <span class="text-danger"></span>
                        
	                </div>
	                <div class="form-group d-flex">
	                   <input type="password" class="form-control mt-2 p-2rounded-left" placeholder="" name="cpassword" id="cpassword" required/>
	                 
                            <span class="text-danger"></span>
                      
	                </div>
	                <div  style={{marginTop: '7px' }} id="CheckPasswordMatch"></div>
	            <div class="form-group">
	            	<button type="submit" class="form-control btn btn-primary rounded submit px-3">Start your free trial</button>
	            </div>
	            
	            <div class="w-100 form-group text-md-left text-white">
	                       
                            <a href="" class="text-warning">
                               <p>Already Have an Account.</p><p>Login Here!</p>
                            </a>

                </div>
               
	          </form>
	        </div>
				</div>
			</div>
		</div>
	</section>
    



    </div>
  );
}

export default App;
