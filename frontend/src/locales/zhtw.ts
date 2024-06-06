export default {
  open: "打開",
  message: "歡迎",
  success: "成功",
  failed: "失敗",
  enable: "啟用",
  disable: "禁用",
  loading: "加載中...",
  confirm: "是否確定？",
  yes: "確認",
  no: "取消",
  unlimited: "無限",
  remained: "剩余",
  type: "類型",
  protocol: "協定",
  submit: "提交",
  reset: "重置",
  now: "當前",
  network: "網絡",
  copyToClipboard: "復製到剪貼板",
  noData: "無數據！",
  invalidLogin: "登錄無效！",
  online: "在線",
  version: "版本",
  email: "電子郵件",
  commaSeparated: "（逗號分隔）",
  error: {
    dplData: "重複數據",
  },
  pages: {
    login: "登錄",
    home: "主頁",
    inbounds: "入站管理",
    outbounds: "出站管理",
    clients: "用戶管理",
    rules: "路由列表",
    tls: "TLS 設置",
    basics: "基礎信息",
    admins: "管理員",
    settings: "設置",
  },
  main: {
    tiles: "信息卡",
    gauges: "儀表板",
    charts: "圖表",
    infos: "信息",
    gauge: {
      cpu: "CPU 儀表",
      mem: "RAM 儀表",
    },
    chart: {
      cpu: "CPU 監視器",
      mem: "RAM 監視器",
      net: "網絡帶寬",
      pnet: "網絡數據包",
    },
    info: {
      sys: "系統信息",
      sbd: "運行信息",
      host: "主機",
      cpu: "CPU",
      core: "核心",
      uptime: "運行時間",
      threads: "線程",
      memory: "內存",
      running: "運行狀態"
    }
  },
  objects: {
    inbound: "入站",
    client: "客戶端",
    outbound: "出站",
    rule: "規則",
    user: "用戶",
    tag: "標簽",
    listen: "聽",
    dial: "撥號",
    tls: "TLS",
    multiplex: "多路復用",
    transport: "傳輸",
    method: "方法",
    headers: "方法",
    key: "鑰匙",
    value: "價值",
  },
  actions: {
    action: "操作",
    add: "添加",
    edit: "編輯",
    del: "刪除",
    save: "保存",
    update: "更新",
    submit: "提交",
    close: "關閉",
    restartApp: "重啟面板",
  },
  login: {
    title: "登錄",
    username: "用戶名",
    unRules: "用戶名不能為空",
    password: "密碼",
    pwRules: "密碼不能為空",
  },
  menu: {
    logout: "退出登錄",
  },
  admin: {
    changeCred: "更改憑據",
    oldPass: "當前密碼",
    newUname: "新用戶名",
    newPass: "新密碼",
    lastLogin: "上次登入",
    date: "日期",
    time: "時間",
  },
  setting: {
    interface: "界面",
    sub: "訂閱",
    addr: "地址",
    port: "端口",
    webPath: "基本 URI",
    domain: "域名",
    sslKey: "SSL 密鑰 (Key) 路徑",
    sslCert: "SSL 證書 (cert) 路徑",
    webUri: "面板 URI",
    sessionAge: "會話最大連接數",
    trafficAge: "流量最大年齡",
    timeLoc: "時區",
    subEncode: "啟用編碼",
    subInfo: "啟用用戶信息",
    path: "默認路徑",
    update: "自動更新時間",
    subUri: "訂閱 URL",
  },
  client: {
    name: "名稱",
    desc: "描述",
    inboundTags: "入站標簽",
    basics: "基礎",
    config: "配置",
    links: "鏈接",
    external: "外部鏈接",
    sub: "外部訂閱",
  },
  types: {
    un: "用戶名",
    pw: "密碼",
    direct: {
      overrideAddr: "覆蓋地址",
      overridePort: "覆蓋端口",
      proxyProtocol: "代理協議",
    },
    hy: {
      obfs: "混淆密碼",
      auth: "驗證密碼",
      hyOptions: "Hysteria 選項",
      hy2Options: "Hysteria2 選項",
      ignoreBw: "忽略客戶端帶寬",
    },
    shdwTls: {
      hs: "握手服務器",
      addHS: "添加握手服務器",
    },
    ssh: {
      passphrase: "密語",
      hostKey: "主機密鑰",
      algorithm: "密鑰算法",
      clientVer: "客戶端版本",
      options: "SSH 選項",
    },
    tor: {
      execPath: "可執行文件路徑",
      dataDir: "數據目錄",
      extArgs: "額外參數",
    },
    tuic: {
      congControl: "擁塞控制",
      authTimeout: "身份驗證超時",
      hb: "心跳",
    },
    vless: {
      flow: "流量",
      udpEnc: "UDP 封包編碼",
    },
    vmess: {
      security: "安全性",
      globalPadding: "全局填充",
      authLen: "加密長度",
    },
    wg: {
      privKey: "私鑰",
      pubKey: "對等方公鑰",
      psk: "預共享密鑰",
      localIp: "本地 IP",
      worker: "工作線程",
      ifName: "介面名稱",
      sysIf: "系統介面",
      gso: "分段卸載",
      options: "Wireguard 選項",
      multiPeer: "多對等方",
      allowedIp: "允許的 IP",
      peer: "對等方",
      peers: "對等方",
    },
    lb: {
      defaultOut: "默認外部",
      interruptConn: "中斷現有連接",
      testUrl: "測試 URL",
      interval: "間隔",
      tolerance: "容忍度",
      urlTestOptions: "URL 測試選項"
    }
  },
  in: {
    addr: "地址",
    port: "端口",
    sniffing: "嗅探",
    clients: "啟用客戶端",
    ssMethod: "方法",
  },
  listen: {
    sniffing: "嗅探",
    sniffingTimeout: "嗅探超時",
    sniffingOverride: "覆蓋目的地",
    options: "監聽選項",
    tcpOptions: "TCP 選項",
    udpOptions: "UDP 選項",
    detour: "繞道",
    detourText: "轉發到入站",
    domainStrategy: "域名策略",
  },
  dial: {
    bindIf: "綁定到網路接口",
    bindIp4: "綁定到 IPv4",
    bindIp6: "綁定到 IPv6",
    reuseAddr: "重用監聽地址",
    connTimeout: "連接超時",
    fbTimeout: "回退超時",
    options: "撥號選項",
    detourText: "轉寄至出站",
  },
  transport: {
    enable: "啟用傳輸",
    host: "主機",
    hosts: "主機列表",
    path: "路徑",
    httpMethod: "請求方法",
    idleTimeout: "閒置超時",
    pingTimeout: "Ping 超時",
    grpcServiceName: "服務名稱",
    grpcPws: "允許無流",
  },
  mux: {
    enable: "啟用多路徑",
    maxConn: "最大連接數",
    minStr: "最小串流數",
    maxStr: "最大串流數",
    padding: "僅填充",
    enableBrutal: "啟用暴力",
  },
  out: {
    addr: "伺服器地址",
    port: "伺服器端口",
  },
  rule: {
    add: "添加規則",
    simple: "簡單",
    logical: "邏輯",
    mode: "模式",
    invert: "反轉",
    ipVer: "IP 版本",
    domain: "域名",
    domainSufix: "域名後綴",
    domainKw: "域名關鍵詞",
    domainRgx: "域名正則表達式",
    ip: "IP CIDR",
    privateIp: "無效 IP 範圍",
    port: "端口",
    portRange: "端口範圍",
    srcCidr: "源 IP CIDR",
    srcPrivateIp: "無效源 IP",
    srcPort: "源端口",
    srcPortRange: "源端口範圍",
    ruleset: "規則集",
    rulesetMatchSrc: "規則集 IP 範圍匹配源",
    options: "規則選項",
    domainRules: "域名/IP",
    srcIpRules: "源 IP",
    srcPortRules: "源端口",
  },
  ruleset: {
    add: "添加規則集",
    format: "數據格式",
    interval: "更新間隔",
    remote: "遠端",
    local: "本地",
  },
  basic: {
    log: {
      title: "日誌",
      level: "級別",
      output: "輸出",
      timestamp: "啟用時間戳記",
    },
    dns: {
      final: "最終",
      server: "服務器",
      firstServer: "首選服務器",
    },
    routing: {
      title: "路由",
      defaultOut: "默認外部",
      defaultIf: "默認網卡",
      defaultRm: "默認路由標記",
      autoBind: "自動綁定網卡",
    },
    exp: {
      storeFakeIp: "存儲假 IP",
    },
  },
  tls : {
    enable: "啟用 TLS",
    usePath: "使用外部路徑",
    useText: "使用文件內容",
    certPath: "證書文件路徑",
    keyPath: "私鑰文件路徑",
    cert: "證書文件內容",
    key: "私鑰文件內容",
    options: "TLS 選項",
    minVer: "最低版本",
    maxVer: "最高版本",
    cs: "加密套件",
    privKey: "私鑰",
    pubKey: "公鑰",
    disableSni: "停用 SNI",
    insecure: "允許不安全連線",
    acme: {
      options: "ACME 選項",
      dataDir: "數據目錄",
      defaultDomain: "默認域名",
      disableChallenges: "禁用挑戰",
      httpChallenge: "禁用 HTTP 挑戰",
      tlsChallenge: "禁用 TLS 挑戰",
      altPorts: "替代端口",
      altHport: "替代 HTTP 端口",
      altTport: "替代 TLS 端口",
      caProvider: "CA 提供商",
      customCa: "自定義 CA 提供商",
      extAcc: "外部賬戶",
      dns01: "DNS01 挑戰",
      dns01Provider: "DNS01 挑戰提供商"
    },
  },
  stats: {
    upload: "上傳",
    download: "下載",
    volume: "流量",
    usage: "已用",
    enable: "啟用統計",
    graphTitle: "流量圖表",
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
    h: "時",
    m: "分",
    s: "秒",
    ms: "毫秒",
  },
}
