
export const CheckValidateData=(email,password,fullName)=>
{
    const fullname= /\d/.test(fullName);
     const Emailid= /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
     const Password= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)

     if(fullname) return "Name is not Valid"
     if(!Emailid) return "Emailid is not Valid"
     if(!Password) return "Password is not Valid"

     return null
}