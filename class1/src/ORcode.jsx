import React, { useState } from 'react'

const ORcode = () => {
    const [img,setImg] = useState("");
  // contision 
  const [Loading,setLoading] = useState(false);
// qr post 
  const [qrData ,setQrData] = useState("http://d1music.netlify.app");
  const [qrsize,setQrSize]= useState("150");

   async function generateQR() {
    setLoading(true);

    try {
      const url =`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data= ${encodeURIComponent(qrData)}`;
     setImg(url);
      
    } catch (error) {

      console.error("Error generating QR code ",error);
      
    }
    finally {
      setLoading(false);
    }
      
    }

    function downloadQR() {

      fetch(img)
      .then((response)=>response.blob())
      .then((blob)=>{

        const link =document.createElement("a");
        link.href=URL.createObjectURL(blob);
        link.download="qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }).catch((error)=>{
        console.error("Error downloading QR code ",error);
      });
      
    }
  return (
    <div className='app-container'>
        <h1>QR CODE GENERATOR</h1>
      {Loading && <p>PLease wait...</p> }

      
       {/* contision rendering  */}

      {img &&   <img  src={img} className='qr-image'/>}


         <div>
            <label htmlfor="dataInput" className='input-label'> Data for Qr code </label>
            <input type="text" value={qrData} id="dataInput" placeholder='Enter data for QR code ' onChange={(e)=>setQrData(e.target.value)}/>

            <label htmlfor="sizeInput" className='input-label'> Image size(e.g.,150) </label>
            <input type="text"  value={qrsize}id="sizeInput" placeholder='Enter Image size' onChange={(e)=>setQrSize(e.target.value)}/>

         {/* Tow Button one QR generate 
          Download QR  */}

          <button className='generate-button' disabled={Loading} onClick={generateQR}>Generate QR</button>

           <button className='download-button' onClick={downloadQR}>Download QR</button>




         </div >
         <p className='footer'>Designed By <a> selvin</a></p>
    
    </div>
  )
}

export default ORcode
