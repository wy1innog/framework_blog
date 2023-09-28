(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{435:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"android4-4短信发送接收流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#android4-4短信发送接收流程"}},[s._v("#")]),s._v(" Android4.4短信发送接收流程")]),s._v(" "),t("p",[s._v("Created by: wylin\nCreated time: July 8, 2023 8:11 PM\nStatus: Approved")]),s._v(" "),t("h1",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),t("p",[s._v("基于"),t("code",[s._v("Android 4.4")]),s._v(" 系统 短信"),t("code",[s._v("APP")]),s._v("发送一条消息到"),t("code",[s._v("RIL")]),s._v("，以及发送结果响应")]),s._v(" "),t("h1",{attrs:{id:"流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#流程"}},[s._v("#")]),s._v(" 流程")]),s._v(" "),t("p",[s._v("主要经过的进程路径：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/packages/apps/Mms/\n/frameworks/opt/telephony/\n/hardware/ril/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("我们先看下他们分别位于"),t("code",[s._v("Android")]),s._v("框架的哪些部分：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://wy1in-md-picture.oss-cn-shanghai.aliyuncs.com/blog/%E9%80%94%E5%BE%84%E6%A8%A1%E5%9D%97.drawio.svg",alt:"途径Android模块"}})]),s._v(" "),t("h1",{attrs:{id:"mms应用发送短信时序图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mms应用发送短信时序图"}},[s._v("#")]),s._v(" "),t("code",[s._v("Mms")]),s._v("应用发送短信时序图")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://wy1in-md-picture.oss-cn-shanghai.aliyuncs.com/blog/Mms%E5%BA%94%E7%94%A8%E5%B1%82%E5%8F%91%E9%80%81%E6%97%B6%E5%BA%8F%E5%9B%BE.svg",alt:"1692880372654"}})]),s._v(" "),t("h1",{attrs:{id:"流程图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#流程图"}},[s._v("#")]),s._v(" 流程图")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://wy1in-md-picture.oss-cn-shanghai.aliyuncs.com/blog/Android4.4%20mms%E5%8F%91%E9%80%81%E6%B5%81%E7%A8%8B%E5%9B%BE-Mms%E5%BA%94%E7%94%A8%E5%9B%BE.svg",alt:"Android4.4 mms发送流程图-Mms应用图.drawio"}})]),s._v(" "),t("h1",{attrs:{id:"composemessageactivity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#composemessageactivity"}},[s._v("#")]),s._v(" ComposeMessageActivity")]),s._v(" "),t("ol",[t("li",[s._v("用户点击发送按钮，触发"),t("code",[s._v("confirmSendMessageIfNeeded()")])]),s._v(" "),t("li",[s._v("判断是彩信还是短信，获取接收者信息，触发"),t("code",[s._v("sendMessage()")])]),s._v(" "),t("li",[s._v("判断异常情况（1.是不是飞行模式  2.是不是紧急模式 3.是不是有正在发送的短信），移除旧的接收者监听器，我们当前发送的短信属性都在"),t("code",[s._v("WorkingMessage")]),s._v("中，调用"),t("code",[s._v("send")]),s._v("方法，之后修改为正在发送短信的状态，添加接收者的监听器")])]),s._v(" "),t("h1",{attrs:{id:"workingmessage-java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workingmessage-java"}},[s._v("#")]),s._v(" WorkingMessage.java")]),s._v(" "),t("ol",[t("li",[s._v("根据是彩信还是短信，起线程开始发送短信，将联系人分开保存在一个"),t("code",[s._v("String")]),s._v("数组中")]),s._v(" "),t("li",[s._v("将短信信息构建成"),t("code",[s._v("SmsMessageSender")]),s._v("对象，调用该对象的"),t("code",[s._v("sendMessage")]),s._v("方法")])]),s._v(" "),t("h1",{attrs:{id:"smsmessagesender"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#smsmessagesender"}},[s._v("#")]),s._v(" SmsMessageSender")]),s._v(" "),t("ol",[t("li",[s._v("根据接收者的数量，依次保存到数据库中，如一条短信发送填写了4个联系人，则会保存4条到数据库中")]),s._v(" "),t("li",[s._v("发送广播"),t("code",[s._v("ACTION_SEND_MESSAGE")]),s._v(" ，由"),t("code",[s._v("SmsReceiverService")]),s._v("来后台处理后续流程")])]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("SmsMessageSender")]),s._v("的主要任务就是把信息按收信人拆分，也就是说，短信是要给每个收信人都发一条，虽然可能只编辑一个短信，但是当收信人有多个时，就变成了多条短信，要给每个收信人都发一条短信。因此，"),t("code",[s._v("SmsMessageSender")]),s._v("的第一个任务就是分析收信人地址，得到收信人的个数，然后把信息按每个收信人都放入待发送的队列中。之后它会发送"),t("code",[s._v("Intent")]),s._v("唤起"),t("code",[s._v("SmsReceiverService")]),s._v("来处理队列，它的工作就完成了。")])]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("SmsMessageSender")]),s._v("的"),t("code",[s._v("sendMessage()")]),s._v("返回后，"),t("code",[s._v("WorkingMessage")]),s._v("会再次回调"),t("code",[s._v("UI")]),s._v("的接口("),t("code",[s._v("mStatusListener.onMessageSent()")]),s._v("），因为此时短信已被写入数据库，所以"),t("code",[s._v("UI")]),s._v("会刷新信息列表显示刚刚的短信，这时的状态应该是正在发送中，因为是从待发送队列中取到的。从这以后，发送流程的类不会再直接与"),t("code",[s._v("UI")]),s._v("进行通信，发送服务"),t("code",[s._v("SmsReceiverService")]),s._v("会直接更新数据库中短信的状态，而"),t("code",[s._v("UI")]),s._v("会监听数据库的变 化，一旦信息数据发生变化，"),t("code",[s._v("UI")]),s._v("就会刷新列表中的消息，更新状态，比如将发送中变成已发送，或是标明发送失败等，而这些状态都是发送服务在更新。")])]),s._v(" "),t("h1",{attrs:{id:"smsreceiverservice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#smsreceiverservice"}},[s._v("#")]),s._v(" SmsReceiverService")]),s._v(" "),t("p",[s._v("根据接收到的"),t("code",[s._v("action")]),s._v("，触发"),t("code",[s._v("handleSendMessage")]),s._v(" ，从数据库取出最先放进去的一条短信，构建"),t("code",[s._v("SmsSingleRecipientSender")]),s._v(" 对象，执行"),t("code",[s._v("sendMessage")]),s._v("发送")]),s._v(" "),t("h1",{attrs:{id:"smssinglerecipientsender"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#smssinglerecipientsender"}},[s._v("#")]),s._v(" SmsSingleRecipientSender")]),s._v(" "),t("ol",[t("li",[s._v("分割信息：调用"),t("code",[s._v("SmsManager")]),s._v("的方法"),t("code",[s._v("divideMessage()")]),s._v(" ，完成短信的拆分。如果短信中的内容超过一定长度，将拆分成两条或多条短信进行发送，此方法的返回值是分割后每条短信的内容")]),s._v(" "),t("li",[s._v("调用"),t("code",[s._v("Sms")]),s._v("类中的静态方法"),t("code",[s._v("moveMessageToFolder")]),s._v("，将即将发送的短信移动到短信发件箱中；")]),s._v(" "),t("li",[s._v("创建"),t("code",[s._v("PendingIntent")]),s._v("：针对分割后的每一部分都会创建两个"),t("code",[s._v("PendingIntent")]),s._v("，这两个"),t("code",[s._v("PendingIntent")]),s._v("都是给底层用的，\n"),t("ul",[t("li",[t("code",[s._v("deliveryIntents")]),s._v("用于短信发送状态报告的回调"),t("code",[s._v("Intent")]),s._v("，这个"),t("code",[s._v("intent")]),s._v("只有在最后一条短信时才会添加，其他的添加为"),t("code",[s._v("null")])]),s._v(" "),t("li",[t("code",[s._v("sentIntents")]),s._v("作为短信发送结果的回调"),t("code",[s._v("Intent")]),s._v(" ，每条短信内容都会添加；")])])]),s._v(" "),t("li",[s._v("调用"),t("code",[s._v("SmsManager.sendMultipartTextMessage")]),s._v("交由底层（"),t("code",[s._v("Frameworks")]),s._v("层），完成单条或多条短信的发送")])]),s._v(" "),t("p",[s._v("已发送广播和已送达广播分别由"),t("code",[s._v("SmsReceiverService")]),s._v("和"),t("code",[s._v("MessageStatusReceiver")]),s._v("监听。它们收到广播后，会从"),t("code",[s._v("Intent")]),s._v("中取得详细的发送和送达状态，然后更新数据库中信息的状态 ("),t("code",[s._v("status")]),s._v(")，"),t("code",[s._v("UI")]),s._v("当发现数据库变化后，就会更新"),t("code",[s._v("UI")]),s._v("。")]),s._v(" "),t("blockquote",[t("p",[s._v("关注"),t("code",[s._v("deliveryintents")]),s._v("和"),t("code",[s._v("sendIntents")]),s._v("两个"),t("code",[s._v("List")]),s._v("，它们分别保存短信发送之后的回调"),t("code",[s._v("Intent")]),s._v("，其类型分别是"),t("code",[s._v("MESSAGE_STATUS_RECEIVED_ACTION")]),s._v("和"),t("code",[s._v("MESSAGE_SENT_ACTION")]),s._v("，通过这些类型即可找到短信发送完成后的回调方法")])]),s._v(" "),t("hr"),s._v(" "),t("p",[t("code",[s._v("frameworks/opt/telephony")])]),s._v(" "),t("h1",{attrs:{id:"短短信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#短短信"}},[s._v("#")]),s._v(" 短短信")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://wy1in-md-picture.oss-cn-shanghai.aliyuncs.com/blog/%E7%9F%AD%E7%9F%AD%E4%BF%A1framework%E6%B5%81%E7%A8%8B.svg",alt:"1692880257206"}})]),s._v(" "),t("h1",{attrs:{id:"长短信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#长短信"}},[s._v("#")]),s._v(" 长短信")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://wy1in-md-picture.oss-cn-shanghai.aliyuncs.com/blog/%E9%95%BF%E7%9F%AD%E4%BF%A1framework%E6%B5%81%E7%A8%8B.svg",alt:"1692880275097"}})]),s._v(" "),t("p",[s._v("后面以短短信继续分析")]),s._v(" "),t("h1",{attrs:{id:"smsmanager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#smsmanager"}},[s._v("#")]),s._v(" SmsManager")]),s._v(" "),t("ol",[t("li",[s._v("会根据传递过来的短信分割条数执行不同的方法，如果是单条执行"),t("code",[s._v("sendTextMessage()")]),s._v("，调用"),t("code",[s._v("Isms")]),s._v(" "),t("code",[s._v("AIDL")]),s._v("接口中的"),t("code",[s._v("sendText()")]),s._v("方法")]),s._v(" "),t("li",[t("code",[s._v("IccSmsInterfaceManager")]),s._v("和"),t("code",[s._v("IccSmsInterfaceManagerProxy")]),s._v("实现了"),t("code",[s._v("Isms")]),s._v("中的接口，"),t("code",[s._v("IccSmsInterfaceManagerProxy")]),s._v("持有"),t("code",[s._v("IccSmsInterfaceManager")]),s._v("，大多数的方法还是转到"),t("code",[s._v("IccSmsInterfaceManager")]),s._v("中进行处理")])]),s._v(" "),t("h1",{attrs:{id:"gsmsmsdispatcher"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gsmsmsdispatcher"}},[s._v("#")]),s._v(" GsmSmsDispatcher")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sendText")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" destAddr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" scAddr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PendingIntent")]),s._v(" sentIntent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PendingIntent")]),s._v(" deliveryIntent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Rlog")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("d")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TAG")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sendText()"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SmsMessage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SubmitPdu")]),s._v(" pdu "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SmsMessage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSubmitPdu")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            scAddr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" destAddr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("deliveryIntent "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pdu "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HashMap")]),s._v(" map "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSmsTrackerMap")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("destAddr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" scAddr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pdu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SmsTracker")]),s._v(" tracker "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSmsTracker")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("map"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sentIntent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" deliveryIntent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getFormat")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sendRawPdu")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tracker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Rlog")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("e")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TAG")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GsmSMSDispatcher.sendText(): getSubmitPdu() returned null"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("该方法中会将中心号码，目标号码，短信内容作为参数得到一个短信"),t("code",[s._v("pdu")])]),s._v(" "),t("p",[t("code",[s._v("getSmsTrackerMap()")]),s._v("将传递的参数保存在了一个"),t("code",[s._v("map")]),s._v("中，并通过"),t("code",[s._v("getSmsTracker()")]),s._v("将参数传递构建了一个"),t("code",[s._v("SmsTracker")]),s._v("对象， "),t("code",[s._v("sendRawPdu()")]),s._v("将该对象传递到"),t("code",[s._v("SMSDispatcher")]),s._v("中进行处理")]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("SmsDispatcher")]),s._v("中会判断判断一些包的错误情况，并判断网络是否入网，验证过后会调用"),t("code",[s._v("GsmSmsDispatcher.sendSms()")]),s._v(" 方法，失败的话会通过"),t("code",[s._v("sendIntent")]),s._v("发送错误及原因")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sendSms")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SmsTracker")]),s._v(" tracker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HashMap")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" map "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tracker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PendingIntent")]),s._v(" pintent "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tracker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mSentIntent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Intent")]),s._v(" intent "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pintent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getIntent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" smsType "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" intent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getIntExtra")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sms_type"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" msgId "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" intent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getIntExtra")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"msgId"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("byte")]),s._v(" smsc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("byte")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" map"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"smsc"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("byte")]),s._v(" pdu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("byte")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" map"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pdu"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Message")]),s._v(" reply "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("obtainMessage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("EVENT_SEND_SMS_COMPLETE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" tracker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tracker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mRetryCount "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Rlog")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("d")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TAG")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sendSms: "')]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" mRetryCount="')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" tracker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mRetryCount\n                "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" mMessageRef="')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" tracker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mMessageRef\n                "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" SS="')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" mPhone"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getServiceState")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getState")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// per TS 23.040 Section 9.2.3.6:  If TP-MTI SMS-SUBMIT (0x01) type")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   TP-RD (bit 2) is 1 for retry")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   and TP-MR is set to previously failed sms TP-MR")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x01")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" pdu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x01")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            pdu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x04")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// TP-RD")]),s._v("\n            pdu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("byte")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" tracker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mMessageRef"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// TP-MR")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Rlog")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("d")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TAG")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sendSms: "')]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" isIms()="')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isIms")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" mRetryCount="')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("tracker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mRetryCount\n            "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" mImsRetry="')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("tracker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mImsRetry\n            "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" mMessageRef="')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("tracker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mMessageRef\n            "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" SS="')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("mPhone"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getServiceState")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getState")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" smsType = "')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" smsType\n          "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" msgId: "')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" msgId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n    mCi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sendSMS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IccUtils")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bytesToHexString")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("smsc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IccUtils")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bytesToHexString")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pdu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" smsType"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" msgId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" reply"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br")])]),t("p",[s._v("在这里会从将保存在"),t("code",[s._v("tracker")]),s._v("中的"),t("code",[s._v("sendIntent")]),s._v("取出来，并取出短信类型和短信编号，发送给"),t("code",[s._v("RIL")])]),s._v(" "),t("h1",{attrs:{id:"smsdispatcher短信分发器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#smsdispatcher短信分发器"}},[s._v("#")]),s._v(" SMSDispatcher短信分发器")]),s._v(" "),t("p",[t("code",[s._v("SMSDispatcher")]),s._v("继承了"),t("code",[s._v("Handler")]),s._v("，"),t("code",[s._v("SMSDispatcher")]),s._v("对象的"),t("code",[s._v("sendMultipartText")]),s._v("和"),t("code",[s._v("sendText")]),s._v("两个短信发送方法处理逻辑处理相似，可分为两步：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("将短信内容构造为"),t("code",[s._v("SubmitPdu")]),s._v("对象；")])]),s._v(" "),t("li",[t("p",[s._v("调用"),t("code",[s._v("mCm.sendSMS")]),s._v("方法向"),t("code",[s._v("RIL")]),s._v("发起短信发送请求")]),s._v(" "),t("p",[s._v("​")])])]),s._v(" "),t("h1",{attrs:{id:"短信接收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#短信接收"}},[s._v("#")]),s._v(" 短信接收")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://wy1in-md-picture.oss-cn-shanghai.aliyuncs.com/blog/%E7%9F%AD%E4%BF%A1%E6%8E%A5%E6%94%B6%E6%B5%81%E7%A8%8B.svg",alt:"1692880405505"}})]),s._v(" "),t("p",[s._v("短信接收从"),t("code",[s._v("Modem")]),s._v("发到"),t("code",[s._v("RILD")]),s._v("再到"),t("code",[s._v("RILJ")])]),s._v(" "),t("p",[t("code",[s._v("GsmInboundSmsHandler")]),s._v("在初始化的时候就在"),t("code",[s._v("RILJ")]),s._v("中注册了监听，当"),t("code",[s._v("RILJ")]),s._v("收到新消息时就会通知"),t("code",[s._v("GsmInboundSmsHandler")]),s._v("，由它来处理后续")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://wy1in-md-picture.oss-cn-shanghai.aliyuncs.com/blog/%E7%9F%AD%E4%BF%A1%E6%8E%A5%E6%94%B6framework%E6%B5%81%E7%A8%8B%E5%9B%BE.svg",alt:"1692880422063"}})]),s._v(" "),t("p",[s._v("接收短信在"),t("code",[s._v("App")]),s._v("这里只是把短信信息从"),t("code",[s._v("intent")]),s._v("中取出来，保存到数据库，"),t("code",[s._v("UI")]),s._v("根据数据库内容刷新，再加上通知栏通知新消息")]),s._v(" "),t("p",[s._v("主要的消息解析还是在"),t("code",[s._v("SmsMessage")]),s._v("中处理完成的")])])}),[],!1,null,null,null);t.default=e.exports}}]);