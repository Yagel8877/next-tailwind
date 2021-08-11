import Navbar from "./Navbar";


const Layout = ({ children }) => {
    
    return (
        <html className='bg-gradient-to-r from-blue-300 to-green-300'>
                
                <Navbar />
                <main className='pt-10'>{ children }</main>
            
        </html>
        
        );
}
 
export default Layout;