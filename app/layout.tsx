import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/app/styles/_global.css'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            {children}
        </html>
    )
}   