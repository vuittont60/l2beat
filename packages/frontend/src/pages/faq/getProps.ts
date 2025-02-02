import { Config } from '../../build/config'
import { getFooterProps, getNavbarProps } from '../../components'
import { Wrapped } from '../Page'
import { FaqPageProps } from './FaqPage'
import { getFaqItems } from './getFaqItems'

export function getProps(config: Config): Wrapped<FaqPageProps> {
  return {
    props: {
      navbar: getNavbarProps(config, 'faq'),
      title: 'Frequently Asked Questions',
      items: getFaqItems(config.features.detailedTvl),
      footer: getFooterProps(config),
    },
    wrapper: {
      metadata: {
        title: 'L2BEAT – Frequently Asked Questions',
        description:
          'Frequently Asked Questions about L2BEAT – an analytics and research website about Ethereum layer 2 scaling.',
        image: 'https://l2beat.com/meta-images/overview-scaling.png',
        url: 'https://l2beat.com/faq/',
      },
    },
  }
}
