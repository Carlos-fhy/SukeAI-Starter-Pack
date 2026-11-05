import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://carlos-fhy.github.io',
  base: '/SukeAI-Starter-Pack',
  integrations: [
    starlight({
      title: '大学生 AI 开荒指南',
      description: '面向所有大学生的 AI 使用与驾驭指南',
      customCss: ['./src/styles/custom.css'],
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
