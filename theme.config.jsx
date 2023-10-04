import Logo from '@/components/images/logo'
import Socials from '@/components/layout/socials'
import { EnvelopeClosedIcon, PaperPlaneIcon } from '@radix-ui/react-icons';
import { Mail } from 'lucide-react';
import { useRouter } from 'next/router';
const themeConfig = {
	docsRepositoryBase: 'https://github.com/lacymorrow/lacy-nextra/tree/main/src/pages',
	logo: Logo,
	logoLink: '/',
	primaryHue: 310,

	faviconGlyph: '🧬',
	feedback: {
		content: 'Questions? Leave feedback →',
		labels: 'feedback'
	},
	editLink: {
		text: 'Edit on GitHub →',
	},
	useNextSeoProps() {
		const { asPath } = useRouter()
		if (asPath !== '/') {
			return {
				titleTemplate: '%s – Lacy Morrow',
			}
		}
	},
	project: {
		link: 'https://github.com/lacymorrow'
	},
	chat: {
		link: 'https://lacymorrow.com/contact',
		icon: (<EnvelopeClosedIcon className='h-6 w-6' />),
	},
	navigation: {
		prev: true,
		next: true
	},
	toc: {
		backToTop: true,
		float: true
	},
	banner: {
		text: (
			<a href="https://lacymorrow.github.io/crossover" target="_blank">
				🎉 CrossOver v3.1.5 has been released. Read more →
			</a>
		)
	},
	sidebar: {
		toggleButton: true,
		defaultMenuCollapseLevel: 1,
		autoCollapse: true,
		titleComponent({ title, type }) {
			if (type === 'separator') {
				return <span className="cursor-default">{title}</span>
			}
			return <>{title}</>
		},
	},
	// head: function useHead() {
	// 	const { title } = useConfig()
	// 	const { route } = useRouter()
	// 	const socialCard =
	// 		route === '/' || !title
	// 			? 'https://nextra.site/og.jpeg'
	// 			: `https://nextra.site/api/og?title=${title}`

	// 	return (
	// 		<>
	// 			<meta name="msapplication-TileColor" content="#fff" />
	// 			<meta name="theme-color" content="#fff" />
	// 			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	// 			<meta httpEquiv="Content-Language" content="en" />
	// 			<meta
	// 				name="description"
	// 				content="Make beautiful websites with Next.js & MDX."
	// 			/>
	// 			<meta
	// 				name="og:description"
	// 				content="Make beautiful websites with Next.js & MDX."
	// 			/>
	// 			<meta name="twitter:card" content="summary_large_image" />
	// 			<meta name="twitter:image" content={socialCard} />
	// 			<meta name="twitter:site:domain" content="nextra.site" />
	// 			<meta name="twitter:url" content="https://nextra.site" />
	// 			<meta
	// 				name="og:title"
	// 				content={title ? title + ' – Nextra' : 'Nextra'}
	// 			/>
	// 			<meta name="og:image" content={socialCard} />
	// 			<meta name="apple-mobile-web-app-title" content="Nextra" />
	// 			<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
	// 			<link rel="icon" href="/favicon.png" type="image/png" />
	// 			<link
	// 				rel="icon"
	// 				href="/favicon-dark.svg"
	// 				type="image/svg+xml"
	// 				media="(prefers-color-scheme: dark)"
	// 			/>
	// 			<link
	// 				rel="icon"
	// 				href="/favicon-dark.png"
	// 				type="image/png"
	// 				media="(prefers-color-scheme: dark)"
	// 			/>
	// 		</>
	// 	)
	// },
	footer: {
		text: (
			<div className='flex gap-4 text-xs'>
				<div className='flex items-center'>
					MIT {new Date().getFullYear()} ©{' '}
					<a href="https://lacymorrow.com" target="_blank">
						Lacy Morrow
					</a>
				</div>
				<Socials />
			</div>
		)
	}
}

export default themeConfig;
