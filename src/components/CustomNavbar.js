import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Collapse,
  NavbarToggler,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { doLogout,getCurrentUserDetail,isLoggedIn } from '../auth/indexS';
import '../css/styling.css'
import'../css/headings.css'


const CustomNavbar=()=>
{
   let navigate=useNavigate()
   const [isOpen, setIsOpen] = useState(false);
    const [login,setLogin]=useState(false)
    const[user,setUser]=useState(undefined)
   
    useEffect(()=>
    {
      setLogin(isLoggedIn())
      setUser(getCurrentUserDetail())
    },[login])

    const toggle = () => setIsOpen(!isOpen);
    
    const logout=()=>{
      doLogout(()=>{
        setLogin(false)
        navigate("/")
      })
    }

    return(
      <div>
<Navbar color='dark'
        expand='md'
        dark
        fixed="">
        <NavbarBrand href="/"><b className='text3'>LIBRARY MANAGEMENT</b></NavbarBrand>
         <NavbarToggler onClick={toggle} />
         <Collapse isOpen={isOpen} navbar> 
          <Nav className="me-auto" >
            <NavItem>
              <NavLink href="/" ><b className='text4' >HOME</b></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/category">
              <b className='text4'>CATEGORIES</b>
              </NavLink>
              </NavItem>
              <NavItem> 
              <NavLink href="/user/cart">
              <b className='text4'>CART</b>
              </NavLink>
              </NavItem>
              {/* <NavItem> 
              <NavLink href="/search">
              <b className='text4'>SEARCH BOOKS</b>
              </NavLink>
              </NavItem> */}
            <NavItem>
              <NavLink href="/about" >
              <b className='text4'>ABOUT</b>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/user/booklist" >
              <b className='text4'>BOOKS</b>
              </NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret >
              <b className='text4'>BOOKS</b>
              </DropdownToggle>
              <DropdownMenu className='dropdownmenu' >
                <DropdownItem href="/user/booklist"><b className='text4'>Book access for user</b></DropdownItem>
                
              </DropdownMenu>
            </UncontrolledDropdown> */}
            </Nav>
            <Nav navbar>
                        {
                            login && (
                                <>
                                    <NavItem>
                                        <NavLink onClick={logout}>
                                        <b className='text4'>Logout</b>
                                        </NavLink>
                                    </NavItem>
                                 

                                       {/* <NavItem>
                                         <NavLink >
                                            * {user.email+" | "} *
                                            {(user.id) 
                                             ? " sid : "+user.sid
                                             : " uid : "+user.uid}
                                        </NavLink> 
                                    </NavItem>     */}
                                </>
                            )
                        }

                        {
                            !login && (

                                <>                      
<UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret >
              <b className='text4'>LOGIN</b>
              </DropdownToggle>
              <DropdownMenu className='dropdownmenu'>
                <DropdownItem href="/loginass"><b className='text4'>STAFF</b></DropdownItem>
                <DropdownItem href="/loginasu"><b className='text4'>USER</b></DropdownItem>
                <DropdownItem divider />
               
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret >
              <b className='text4'>SIGNUP</b>
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem href="/signupass"><b className='text4'>STAFF</b></DropdownItem>
                <DropdownItem href="/signupasu"><b className='text4'>USER</b></DropdownItem>
                <DropdownItem divider />
               
              </DropdownMenu>
            </UncontrolledDropdown>
                                </>
                            )
}
            
          </Nav>
         </Collapse>
      </Navbar>
    </div>
    );
}

export default CustomNavbar;