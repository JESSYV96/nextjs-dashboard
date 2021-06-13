import React from 'react'
import CardProject from '../components/CardProject'
import WidgetAmbassador from '../components/WidgetAmbassador'
import WidgetAmbassadorLevel from '../components/WidgetAmbassadorLevel'
import WidgetComparison from '../components/WidgetComparison'
import ContentLayout from '../layouts/DashboardContentLayout'
import styles from '../styles/pages/home.module.scss'

export default function Home() {
  return (
    <ContentLayout>
      <div className={styles.alignBlocs}>
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
        <div className={styles.comparisonContainer}>
          <WidgetComparison />
        </div>
        <div className={styles.projectContainer}>
          <CardProject title="Project referred" content={76} />
          <CardProject title="Project paid" content={55} />
          <CardProject title="Project completed" content={32} />
          <CardProject title="Average conversion rate" content="54.22%" />
          <CardProject title="Project paid" content="380.72€" />
          <CardProject title="Merchants" content={21} />
        </div>
      </div>

    </ContentLayout>
  )
}
