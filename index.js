//function change
        let div1=document.createElement("div")
        let collagename=document.createElement("p")
        let image=document.createElement("img")
        let nameform=document.createElement("div")
        let name=document.createElement("div")
        let rollnoform=document.createElement("div")
        let rollno=document.createElement("div")
        let contact=document.createElement("div")
        let contactno=document.createElement("div")
        let address=document.createElement("div")
        let addressinfo=document.createElement("div")

        

        function adddiv()
        {
            div1.style.border="2px solid black";
            div1.style.height="450px";
            div1.style.width="350px";
            div1.style.borderRadius="100px"
            div1.style.backgroundImage=`url("https://i.pinimg.com/736x/83/59/8a/83598a5ab3f5371e7662b565836c0c39.jpg")`;
            // div1.style.backgroundRepeat="no-repeat"
            // div1.style.backgroundPosition="center";
            div1.style.padding="30px"
            div1.style.margin="10px"
            // div1.style.marginLeft="500px"
            document.body.append(div1)
            div1.style.fontFamily="fantasy"
            collagename.innerHTML="CMR College of Engineering and Technology";
            collagename.style.fontSize="25px";
            div1.append(collagename)
            // let image=document.createElement("img")
            image.setAttribute("src","./images/img1.jpeg")
            image.style.height="30%";
            image.style.width="60%";
            image.style.borderRadius="150%"
            image.style.marginLeft="50px"
            div1.append(image)
            // let nameform=document.createElement("div")
            nameform.innerHTML="Name:"
            nameform.style.marginTop="20px"
            nameform.style.marginLeft="80px"
            
            div1.append(nameform)
            // let name=document.createElement("div")
            name.innerHTML="Nithisha Goud";
            name.style.marginLeft="125px"
            name.style.marginTop="-20px"
            div1.append(name)
            // let rollnoform=document.createElement("div")
            rollnoform.innerHTML="Roll no:"
            rollnoform.style.marginTop="20px"
            rollnoform.style.marginLeft="80px"
            div1.append(rollnoform)
            // let rollno=document.createElement("div")
            rollno.innerHTML="039"
            rollno.style.marginLeft="130px"
            rollno.style.marginTop="-20px"
            div1.append(rollno)
            // let contact=document.createElement("div")
            contact.innerHTML="Contact:"
            contact.style.marginTop="20px"
            contact.style.marginLeft="80px"
            div1.append(contact)
            // let contactno=document.createElement("div")
            contactno.innerHTML="6301184332"
            contactno.style.marginLeft="138px"
            contactno.style.marginTop="-20px"
            div1.append(contactno)
            // let address=document.createElement("div")
            address.innerHTML="Address:"
            address.style.marginTop="20px"
            address.style.marginLeft="80px"
            div1.append(address)
            // let addressinfo=document.createElement("div")
            addressinfo.innerHTML=" Kandlakoya, Medhcal opposite Kandlakoya Road, Hyderabad, Telangana 501401"
            addressinfo.style.marginLeft="138px"
            addressinfo.style.marginTop="-20px"
            div1.append(addressinfo)
        }



            
