import AmbassadorLevel from '../components/AmbassadorLevel'
import ContentLayout from '../layouts/DashboardContentLayout'
import styles from '../styles/pages/home.module.scss'

export default function Home() {
  return (
    <ContentLayout>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Good afternoon, Tim</h2>
        <span className={styles.subtitle}>Here's what happening with your ambassador account today</span>
        <div className={styles.ambassadorContainer}>
          <AmbassadorLevel />
        </div>
        <div className={styles.projectContainer}>
         
        </div>
      </div>

    </ContentLayout>
  )
}
