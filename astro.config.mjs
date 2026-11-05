import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

const WENKAI = 'https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.7.0';

export default defineConfig({
  site: 'https://carlos-fhy.github.io',
  base: '/SukeAI-Starter-Pack',
  integrations: [
    starlight({
      title: '大学生 AI 开荒指南',
      description: '从第一次提问到独立驾驭 AI，写给所有大学生的开源使用指南。',
      logo: {
        src: './src/assets/logo.svg',
        alt: '大学生 AI 开荒指南'
      },
      locales: {
        root: { label: '简体中文', lang: 'zh-CN' }
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/Carlos-fhy/SukeAI-Starter-Pack' }
      ],
      editLink: {
        baseUrl: 'https://github.com/Carlos-fhy/SukeAI-Starter-Pack/edit/main/'
      },
      credits: false,
      customCss: ['./src/styles/custom.css'],
      head: [
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://cdn.jsdelivr.net', crossorigin: true } },
        { tag: 'link', attrs: { rel: 'stylesheet', href: `${WENKAI}/lxgwwenkai-regular.css` } },
        { tag: 'link', attrs: { rel: 'stylesheet', href: `${WENKAI}/lxgwwenkai-bold.css` } }
      ],
      sidebar: [
        { label: '第一阶段：国内 AI 入门', autogenerate: { directory: '01-newbie' } },
        { label: '第二阶段：AI 日常任务', autogenerate: { directory: '02-main-quests' } },
        { label: '第三阶段：AI 能力地图', autogenerate: { directory: '03-capabilities' } },
        { label: '第四阶段：工具扩展', autogenerate: { directory: '04-toolbox' } },
        { label: '第五阶段：进阶驾驭', autogenerate: { directory: '05-advanced' } },
        { label: '开荒者社区', autogenerate: { directory: '06-community' } },
        { label: '实操教程', autogenerate: { directory: 'tutorials' } }
      ]
    })
  ]
});
