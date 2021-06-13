import styles from '../styles/layouts/dashboardLayout.module.scss'
import Sidebar from '../components/Sidebar'

interface LayoutProps {
    children: any
}

const DashboardLayout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.dashboardContainer}>
            <Sidebar />
            {children}
        </div>
    )
}

export default DashboardLayout
