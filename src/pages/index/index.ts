import { Vue, Component } from 'vue-property-decorator'
import { AppUrls } from '@/utils/consts.ts'
import Card from '@/components/card.vue' // mpvue目前只支持的单文件组件
import Card2 from '@/components/card2.vue' // mpvue目前只支持的单文件组件

const debug = require('debug')('log:Index')

// 必须使用装饰器的方式来指定component
@Component({
  components: {
    Card, Card2
  }
})
class Index extends Vue {
  AppUrls = AppUrls
  ver: string = 'indexValue'

  onShow () { // 小程序 hook
    debug('onShow')
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
      }
    })
  }

  mounted () { // vue hook
    debug('mounted')
  }
}

export default Index
