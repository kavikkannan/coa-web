import './globals.css'
import Header from '@/components/hearder'
import Footer from '@/components/footer'
export const metadata = {
  title: 'task',
  description: 'task management systenm',
}

export default function RootLayout({ children }) {
  return (
    <html className='bg-black' lang="en">
      <body>
        <main className={"app"}>
          <div><Header/></div>
          {children}
          <div><Footer/></div>
          </main>
          
        </body>
      
    </html>
  )
}

