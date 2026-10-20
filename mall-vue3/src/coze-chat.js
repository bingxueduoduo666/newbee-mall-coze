import { cozeConfig } from './coze-config.js'

// 动态加载扣子 Chat SDK 并初始化聊天窗。
// PC 端右下角会自动出现聊天入口，移动端聊天窗铺满全屏。
// 未配置 botId / token 时自动跳过，不影响商城本身运行。
export function initCozeChat() {
  const { sdkUrl, botId, token } = cozeConfig

  const notConfigured =
    !botId ||
    botId === 'YOUR_BOT_ID' ||
    !token ||
    token === 'YOUR_COZE_PAT'

  if (notConfigured) {
    console.warn(
      '[Coze] 尚未配置 botId / token，已跳过聊天窗加载。请到 src/coze-config.js 填写。'
    )
    return
  }

  const script = document.createElement('script')
  script.src = sdkUrl
  script.onload = () => {
    if (window.CozeWebSDK && window.CozeWebSDK.WebChatClient) {
      new window.CozeWebSDK.WebChatClient({
        config: {
          type: 'bot',
          botId,
        },
        auth: {
          type: 'token',
          token,
        },
      })
      console.log('[Coze] AI 客服聊天窗已加载')
    } else {
      console.error('[Coze] SDK 已加载，但未找到 CozeWebSDK.WebChatClient')
    }
  }
  script.onerror = () => {
    console.error('[Coze] SDK 加载失败，请检查 sdkUrl 或网络')
  }
  document.head.appendChild(script)
}
