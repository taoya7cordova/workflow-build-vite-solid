/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  test: {
    // 控制台输出 + JSON 报告（流水线统计用例、判红线）+ HTML 报告（留存查看）
    reporters: [
      'default',
      ['json', { outputFile: './test-report/report.json' }],
      ['html', { outputDir: './test-report' }],
    ],
  },
})
