export default {
  message: "欢迎",
  success: "成功",
  failed: "失败",
  enable: "启用",
  disable: "禁用",
  loading: "加载中...",
  confirm: "是否确定？",
  yes: "确认",
  no: "取消",
  unlimited: "无限",
  remained: "剩余",
  type: "类型",
  protocol: "协议",
  submit: "提交",
  reset: "重置",
  now: "当前",
  network: "网络",
  copyToClipboard: "复制到剪贴板",
  noData: "无数据！",
  invalidLogin: "登录无效！",
  online: "在线",
  version: "版本",
  email: "电子邮件",
  commaSeparated: "（逗号分隔）",
  count: "计数",
  error: {
    dplData: "重复数据",
    core: "Sing-Box 错误",
  },
  pages: {
    login: "登录",
    home: "主页",
    inbounds: "入站管理",
    outbounds: "出站管理",
    clients: "用户管理",
    rules: "路由列表",
    tls: "TLS 设置",
    basics: "基础信息",
    admins: "管理员",
    settings: "设置",
  },
  main: {
    tiles: "信息卡",
    gauges: "仪表板",
    charts: "图表",
    infos: "信息",
    gauge: {
      cpu: "CPU 仪表",
      mem: "RAM 仪表",
    },
    chart: {
      cpu: "CPU 监视器",
      mem: "RAM 监视器",
      net: "网络带宽",
      pnet: "网络数据包",
    },
    info: {
      sys: "系统信息",
      sbd: "运行信息",
      host: "主机",
      cpu: "CPU",
      core: "核心",
      uptime: "运行时间",
      threads: "线程",
      memory: "内存",
      running: "运行状态"
    }
  },
  objects: {
    inbound: "入站",
    client: "客户端",
    outbound: "出站",
    rule: "规则",
    user: "用户",
    tag: "标签",
    listen: "监听",
    dial: "拨号",
    tls: "TLS",
    multiplex: "多路复用",
    transport: "传输",
    method: "方法",
    headers: "标头",
    key: "键",
    value: "值",
  },
  actions: {
    action: "操作",
    add: "添加",
    new: "添加",
    edit: "编辑",
    del: "删除",
    save: "保存",
    update: "更新",
    submit: "提交",
    set: "设置",
    disable: "禁用",
    close: "关闭",
    restartApp: "重启面板",
  },
  login: {
    title: "登录",
    username: "用户名",
    unRules: "用户名不能为空",
    password: "密码",
    pwRules: "密码不能为空",
  },
  menu: {
    logout: "退出登录",
  },
  admin: {
    changeCred: "更改凭据",
    oldPass: "当前密码",
    newUname: "新用户名",
    newPass: "新密码",
    lastLogin: "上次登录",
    date: "日期",
    time: "时间",
    changes: "更改",
    actor: "执行者",
    key: "键",
    action: "操作",
  },
  setting: {
    interface: "界面",
    sub: "订阅",
    addr: "地址",
    port: "端口",
    webPath: "面板路径",
    domain: "域名",
    sslKey: "SSL 密钥 (Key) 路径",
    sslCert: "SSL 证书 (cert) 路径",
    webUri: "面板 URI",
    sessionAge: "会话超时时限",
    trafficAge: "流量过期时限",
    timeLoc: "时区",
    subEncode: "启用 Base64 编码",
    subInfo: "启用用户信息",
    path: "默认路径",
    update: "自动更新时间",
    subUri: "订阅 URI",
  },
  client: {
    name: "名称",
    desc: "描述",
    inboundTags: "入站标签",
    basics: "基础",
    config: "配置",
    links: "链接",
    external: "外部链接",
    sub: "外部订阅",
  },
  types: {
    un: "用户名",
    pw: "密码",
    direct: {
      overrideAddr: "覆盖地址",
      overridePort: "覆盖端口",
    },
    hy: {
      obfs: "混淆密码",
      auth: "认证密码",
      hyOptions: "Hysteria 选项",
      hy2Options: "Hysteria2 选项",
      ignoreBw: "忽略客户端带宽",
    },
    shdwTls: {
      hs: "握手服务器",
      addHS: "添加握手服务器",
    },
    ssh: {
      passphrase: "密码短语",
      hostKey: "主机密钥",
      algorithm: "密钥算法",
      clientVer: "客户端版本",
      options: "SSH 选项",
    },
    tor: {
      execPath: "可执行文件路径",
      dataDir: "数据目录",
      extArgs: "额外参数",
    },
    tuic: {
      congControl: "拥塞控制",
      authTimeout: "认证超时",
      hb: "心跳包",
    },
    vless: {
      flow: "流控",
      udpEnc: "UDP 数据包编码",
    },
    vmess: {
      security: "安全性",
      globalPadding: "全局填充",
      authLen: "加密长度",
    },
    wg: {
      privKey: "私钥",
      pubKey: "对等方公钥",
      psk: "预共享密钥",
      localIp: "本地 IP 地址",
      worker: "工作线程",
      ifName: "接口名称",
      sysIf: "系统接口",
      gso: "分段卸载",
      options: "WireGuard 选项",
      multiPeer: "多对等体",
      allowedIp: "允许的 IP 地址",
      peer: "对等体",
      peers: "对等体",
    },
    lb: {
      defaultOut: "默认出站",
      interruptConn: "中断现有连接",
      testUrl: "测试 URL",
      interval: "间隔",
      tolerance: "容错",
      urlTestOptions: "URL 测试选项",
    }
  },
  in: {
    addr: "地址",
    port: "端口",
    sniffing: "嗅探",
    clients: "启用客户端",
    ssMethod: "方法",
  },
  listen: {
    sniffing: "嗅探",
    sniffingTimeout: "嗅探超时",
    sniffingOverride: "覆盖目标地址",
    options: "监听选项",
    tcpOptions: "TCP 选项",
    udpOptions: "UDP 选项",
    detour: "转发",
    detourText: "转发到入站",
    domainStrategy: "域名解析策略",
  },
  dial: {
    bindIf: "绑定到网络接口",
    bindIp4: "绑定到 IPv4",
    bindIp6: "绑定到 IPv6",
    reuseAddr: "重用监听地址",
    connTimeout: "连接超时",
    fbTimeout: "回退超时",
    options: "拨号选项",
    detourText: "转发至出站",
  },
  transport: {
    enable: "启用传输",
    host: "主机域名",
    hosts: "主机域名列表",
    path: "HTTP 请求路径",
    httpMethod: "HTTP 请求方法",
    idleTimeout: "空闲超时",
    pingTimeout: "Ping 超时",
    grpcServiceName: "gRPC 服务名称",
    grpcPws: "允许无流时保持连接",
  },
  mux: {
    enable: "启用多路复用",
    maxConn: "最大连接数",
    minStr: "最小流数",
    maxStr: "最大流数",
    padding: "仅允许填充连接",
    enableBrutal: "启用 TCP Brutal",
  },
  out: {
    addr: "服务器地址",
    port: "服务器端口",
  },
  rule: {
    add: "添加规则",
    simple: "简单",
    logical: "逻辑",
    mode: "模式",
    invert: "反选结果",
    ipVer: "IP 版本",
    domain: "域名",
    domainSufix: "域名后缀",
    domainKw: "域名关键词",
    domainRgx: "域名正则表达式",
    ip: "IP CIDR",
    privateIp: "匹配非公开 IP",
    port: "端口",
    portRange: "端口范围",
    srcCidr: "源 IP CIDR",
    srcPrivateIp: "匹配非公开源 IP",
    srcPort: "源端口",
    srcPortRange: "源端口范围",
    ruleset: "规则集",
    rulesetMatchSrc: "规则集 IP CIDR 匹配源 IP",
    options: "规则选项",
    domainRules: "域名/IP",
    srcIpRules: "源 IP",
    srcPortRules: "源端口",
  },
  ruleset: {
    add: "添加规则集",
    format: "数据格式",
    interval: "更新间隔",
    remote: "远程",
    local: "本地",
  },
  basic: {
    log: {
      title: "日志",
      level: "级别",
      output: "输出",
      timestamp: "启用时间戳",
    },
    dns: {
      final: "最终",
      server: "服务器",
      firstServer: "首选服务器",
    },
    routing: {
      title: "路由",
      defaultOut: "默认出站",
      defaultIf: "默认网卡",
      defaultRm: "默认路由标记",
      autoBind: "自动绑定网卡",
    },
    exp: {
      storeFakeIp: "持久化 Fake-IP",
    },
  },
  tls : {
    enable: "启用 TLS",
    usePath: "使用外部路径",
    useText: "使用文件内容",
    certPath: "证书文件路径",
    keyPath: "私钥文件路径",
    cert: "证书文件内容",
    key: "私钥文件内容",
    options: "TLS 选项",
    minVer: "最低版本",
    maxVer: "最高版本",
    cs: "密码套件",
    privKey: "私钥",
    pubKey: "公钥",
    disableSni: "禁用 SNI",
    insecure: "允许不安全",
    acme: {
      options: "ACME 选项",
      dataDir: "数据目录",
      defaultDomain: "默认域名",
      disableChallenges: "禁用挑战",
      httpChallenge: "禁用 HTTP 挑战",
      tlsChallenge: "禁用 TLS 挑战",
      altPorts: "替代端口",
      altHport: "替代 HTTP 端口",
      altTport: "替代 TLS 端口",
      caProvider: "CA 提供商",
      customCa: "自定义 CA 提供商",
      extAcc: "外部账户",
      dns01: "DNS01 挑战",
      dns01Provider: "DNS01 挑战提供商"
    },
  },
  stats: {
    upload: "上传",
    download: "下载",
    volume: "流量",
    usage: "已用",
    enable: "启用统计",
    graphTitle: "流量图表",
    B: "B",
    KB: "KB",
    MB: "MB",
    GB: "GB",
    TB: "TB",
    PB: "PB",
    p: "p",
    Kp: "Kp",
    Mp: "Mp",
    Gb: "Gb",
    bps: "bps",
    Kbps: "Kbps",
    Mbps: "Mbps",
  },
  date: {
    expiry: "到期",
    expired: "已到期",
    d: "天",
    h: "时",
    m: "分",
    s: "秒",
    ms: "毫秒",
  },
}
