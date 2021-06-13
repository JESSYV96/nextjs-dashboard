import React from 'react'
import WidgetAmbassador from '../components/WidgetAmbassador'
import WidgetAmbassadorLevel from '../components/WidgetAmbassadorLevel'
import ContentLayout from '../layouts/DashboardContentLayout'
import styles from '../styles/pages/home.module.scss'

export default function Home() {
  return (
    <ContentLayout>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Good afternoon, Tim</h2>
        <span className={styles.subtitle}>Here's what happening with your ambassador account today</span>
      </div>
      <div className={styles.ambassadorContainer}>
        <WidgetAmbassadorLevel />
        <WidgetAmbassador
          title="Active projects"
          content="12" />
        <WidgetAmbassador
          title="Commission in approval"
          content="93.34€" />
      </div>
      <div className={styles.projectContainer}>

      </div>
    </ContentLayout>
  )
}
