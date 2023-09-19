
import {Header} from '@/components/header';
import { Menu } from '@/components/menu';
import {Footer} from '@/components/footer';
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
        <Header />
        <Menu />
        {children}
        <Footer />
   
    </html>
  )
}
