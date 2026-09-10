// MyGreens — the plant collection. This is the file to edit when plant records change.
// Each plant's `locationNo` is its recommended spot; every user-facing string is {zh, en}.

// ─────────────────────────────────────────────
// Plant data (bilingual)
// ─────────────────────────────────────────────
const plants = [
    {
        id: 1, nickname: '蛋花', latin: 'Plumeria',
        fullName: { zh: '鸡蛋花 · Frangipani', en: 'Frangipani · 鸡蛋花' },
        sept: { zh: '9月夜温稳定高于15°C后，永久移到户外全日照（阳台边缘或庭院）。枝头出新芽后开始每周浇水，10–11月起用高钾肥促开花。', en: 'Once nights stay above 15°C, move outside permanently to full sun (alfresco edge or yard). Start weekly watering when new tip growth appears; high-potassium feed from Oct–Nov for flowers.' },
        light: 5, water: 1, humidity: 1, waterDays: 24, hold: true, img: 'images/danhua.jpg', bgClass: 'bg-danhual', textClass: 'text-danhual',
        status: 'warning', locationNo: 2,
        short: {
            zh: '冬季休眠，单片新叶缓慢展开中（正常节奏）。极少浇水。',
            en: 'Winter dormancy — a single new leaf slowly unfurling (normal pace). Watering kept minimal.',
        },
        holdNote: {
            zh: '仍处休眠期，单片新叶缓慢展开属正常节奏，极少浇水（土完全干透再浇）。',
            en: 'Still dormant — a single leaf unfurling slowly is normal pace. Watering kept minimal, only when the soil is bone dry.',
        },
        locationDetail: {
            zh: '暂时放在光线最强处过冬。9月移到户外全日照（阳台边缘或庭院）。',
            en: 'Temporarily in the brightest spot for winter. Move outdoors to full sun (alfresco edge or yard) in September.',
        },
        description: {
            zh: '热带落叶灌木，以芳香花朵著称。冬季落叶休眠——不是死了，很正常。',
            en: 'Tropical deciduous shrub famous for fragrant flowers. Goes bare in winter dormancy — it is not dead, this is normal.',
        },
        lightDetail: {
            zh: '需要充足直射光，每天6小时以上。室内放光线最强的地方，靠近落地窗不遮帘。',
            en: 'Needs 6+ hours of direct sun daily. While indoors, give it the brightest window spot, no curtain.',
        },
        waterDetail: {
            zh: '冬季休眠期极少浇水——每3–4周一次，土完全干透再浇。最怕积水烂根。',
            en: 'Barely water in dormancy — once every 3–4 weeks, only when soil is bone dry. Waterlogged roots rot fast.',
        },
        seasonNote: {
            zh: '冬季：完全停水，不施肥。保持通风环境。9月移室外全日照后恢复正常浇水。',
            en: 'Winter: watering fully paused, no fertiliser. Keep air moving. Resume normal watering after moving outside in September.',
        },
        alert: {
            zh: '9月10日更新：仍在冬季休眠，单片新叶缓慢展开，属正常节奏。继续极少浇水。',
            en: '10 Sept update: still in winter dormancy, a single new leaf slowly unfurling — normal pace. Keep watering to a minimum.',
        },
        tips: {
            zh: '• 冬天落叶很正常，不要慌\n• 积水会烂根，宁干勿湿\n• 9月移到庭院全日照，才会开花\n• 枝条软塌=烂根信号，检查根部',
            en: '• Winter leaf drop is normal — don\'t panic\n• Waterlogging rots roots; when in doubt, don\'t water\n• Needs outdoor full sun from Sept to flower\n• Soft mushy stems = rot signal, check the roots',
        },
    },
    {
        id: 2, nickname: '皮皮', latin: 'Ficus elastica (variegated)',
        fullName: { zh: '斑叶橡皮树', en: 'Variegated Rubber Tree · 斑叶橡皮树' },
        sept: { zh: '恢复缓释肥。保持最亮位置以维持斑叶。如根从盆底长出，春季是换盆的最佳时机。', en: 'Resume slow-release fertiliser. Keep the brightest spot to hold variegation. If roots show at the drainage holes, spring is the window to repot.' },
        light: 4, water: 2, humidity: 2, waterDays: 12, img: 'images/pipi.jpg', bgClass: 'bg-pipi', textClass: 'text-pipi', toxic: true,
        status: 'stable', locationNo: 2,
        short: {
            zh: '晒伤已解决，四处基部均有新芽点。已换盆混入珍珠岩+白色套盆，近期已浇透水。喷虫药处理后近期无虫。',
            en: 'Sunburn resolved; new buds at all four base points. Repotted with perlite mixed in, into a white cache pot, watered thoroughly recently. No pests since the last spray.',
        },
        locationDetail: {
            zh: '挪离窗边直晒位置后，晒伤未再新增，历史黑斑不再扩散。需要明亮散射光来维持斑叶颜色。',
            en: 'Moved away from the direct-sun window spot — no new sunburn since, and the old black spots aren\'t spreading. Needs bright indirect light to maintain variegation.',
        },
        description: {
            zh: '橡皮树斑叶品种，铜绿混色叶片。斑叶部分没有叶绿素，需要更多光。晒伤已解决，四处基部均有新芽点，长势良好。',
            en: 'Variegated rubber tree with bronze-green mixed leaves. The pale patches have no chlorophyll, so it needs more light than a green ficus. Sunburn resolved, and new buds are showing at all four base points.',
        },
        lightDetail: {
            zh: '比普通橡皮树需要更强的光照，但避免直晒——之前靠窗直晒导致黑斑。新叶越来越绿=光线不足，需要靠近窗口但避开直射。',
            en: 'Needs more light than a plain rubber tree, but no direct sun — direct sun by the window caused the black spots. New leaves coming in greener = not enough light; move closer to the window but out of direct rays.',
        },
        waterDetail: {
            zh: '干透再浇，避免积水。已换盆混入珍珠岩改善排水，近期已浇透水。',
            en: 'Water only once fully dry, avoid waterlogging. Repotted with perlite mixed in for better drainage; watered thoroughly recently.',
        },
        seasonNote: {
            zh: '9月：已换盆（珍珠岩+白色套盆），晒伤问题已解决，四处基部长出新芽点，长势转好。',
            en: 'September: repotted (perlite mixed in, white cache pot); sunburn resolved and new buds showing at all four base points — turning a corner.',
        },
        alert: {
            zh: '9月10日更新：晒伤已解决（挪离窗边后无新黑斑，历史黑斑不扩散）。四处基部均有新芽点。已换盆混入珍珠岩+白色套盆，近期已浇透水；喷虫药处理后近期无虫。',
            en: '10 Sept update: sunburn resolved (no new black spots since moving off the window, old spots not spreading). New buds at all four base points. Repotted with perlite mixed in, white cache pot, watered thoroughly recently. No pests since the last spray.',
        },
        tips: {
            zh: '• 斑叶越少=光线不够，但别直晒——会长黑斑\n• 干透再浇，避免盆内积水\n• 定期检查虫害，喷药后持续观察\n• 每月擦叶，帮助光合作用',
            en: '• Less variegation = not enough light, but never direct sun — causes black spots\n• Water only once fully dry, avoid waterlogging\n• Check for pests regularly after spraying\n• Wipe leaves monthly to help photosynthesis',
        },
    },
    {
        id: 3, nickname: '刚刚', latin: "Ficus elastica 'Burgundy'",
        fullName: { zh: '黑金刚橡皮树', en: 'Burgundy Rubber Tree · 黑金刚' },
        sept: { zh: '检查截口已愈合（干燥褐色边缘），截口下应萌发2–4根新枝。恢复正常浇水和缓释肥。扦插枝长出新叶=已生根，正式上盆。', en: 'Confirm the topping cut has calloused (dry brown edge) — 2–4 new branches should push below it. Resume normal watering and slow-release feed. The top cutting growing a new leaf = rooted; pot it up properly.' },
        light: 4, water: 2, humidity: 2, waterDays: 12, img: 'images/ganggang.jpg', bgClass: 'bg-heijingang', textClass: 'text-heijingang', toxic: true,
        status: 'stable', locationNo: 2,
        short: {
            zh: '6月已截顶（现90cm）。度假后状态正常，保持偏干、勿移动。',
            en: 'Topped in June (now 90cm). Came through the trip fine — keep dry-ish, don\'t move.',
        },
        locationDetail: {
            zh: '已定位，请勿移动。橡皮树移位会大量落叶。现在90cm，截顶后会从截口下萌发2–4根新枝。',
            en: 'Position fixed — do not move (ficus drops leaves when moved). Now 90cm after topping; 2–4 new branches will emerge below the cut.',
        },
        description: {
            zh: '深色叶片橡皮树。2026年6月已截顶（原超过1m，现90cm），截下的枝条正在扦插。',
            en: 'Dark-leaved rubber tree. Topped June 2026 (was over 1m, now 90cm). The cut top is being propagated in soil.',
        },
        lightDetail: {
            zh: '明亮散射光。靠近落地窗，不遮帘。窗外树木自然过滤光线，非常理想。',
            en: 'Bright indirect light. By the window, no curtain needed — the trees outside filter the light naturally.',
        },
        waterDetail: {
            zh: '冬季保持偏干——截口愈合期间少浇水。每10–14天一次，土表3–4cm干再浇。',
            en: 'Keep on the dry side while the cut heals. Every 10–14 days in winter, when top 3–4cm is dry.',
        },
        seasonNote: {
            zh: '冬季：保持偏干帮助截口愈合。不施肥。8月评估截口是否愈合，春季后萌发新枝。',
            en: 'Winter: stay dry-ish to help the wound callous. No fertiliser. Assess healing in August; new branches push in spring.',
        },
        alert: {
            zh: '截顶恢复中：截口愈合前保持土壤偏干，请勿移动。',
            en: 'Recovering from topping: keep soil dry-ish until the cut callouses. Do not move.',
        },
        tips: {
            zh: '• 截口下方会长出2–4根新枝，让植株更茂盛\n• 乳白色树液有刺激性，处理时戴手套\n• 请勿移位——橡皮树移位大量落叶\n• 截下的顶端枝条正在扦插繁殖中',
            en: '• 2–4 new branches will grow below the cut — bushier plant\n• Milky latex sap irritates skin — wear gloves\n• Never relocate — ficus sheds leaves when moved\n• The cut top is currently propagating in soil',
        },
    },
    {
        id: 4, nickname: '棠棠', latin: 'Begonia maculata',
        fullName: { zh: '鳟鱼秋海棠', en: 'Polka Dot Begonia · 鳟鱼秋海棠' },
        sept: { zh: '徒长的茎剪短一半，促进分枝更茂密。恢复每月施肥。可选择移到阳台遮阴处，通风更好。', en: 'Prune leggy stems by half for bushier regrowth. Resume monthly feeding. Optional move to the covered alfresco for better airflow.' },
        light: 3, water: 3, humidity: 2, waterDays: 8, img: 'images/tangtan.jpg', bgClass: 'bg-tangtan', textClass: 'text-tangtan',
        status: 'warning', locationNo: 3,
        short: {
            zh: '×2盆，均在适应/恢复期。一株已切除活跃茎腐，一株已有新芽展开。暂缓换盆，继续观察。',
            en: '×2 pots, both settling in / recovering. One had active stem rot cut out; the other has a new shoot unfurling. Repotting on hold, still watching.',
        },
        locationDetail: {
            zh: '靠近落地窗但有帘子过滤，2盆。需要明亮散射光但不能直射。',
            en: 'Near the window behind a sheer curtain, 2 pots. Bright indirect, never direct.',
        },
        description: {
            zh: '叶片布满白色斑点（天然特征，非病害）。深绿叶面配红紫色叶背，能开粉白色花。其中一株近期切除了活跃茎腐组织，另一株已有新芽展开。',
            en: 'Leaves covered in white polka dots (a natural feature, not disease). Olive-green tops, red-purple undersides. Can produce white-pink flowers. One pot recently had active stem rot cut out; the other has a new shoot unfurling.',
        },
        lightDetail: {
            zh: '明亮散射光。帘子过滤的窗边位置很理想。过暗会徒长；直射阳光会灼伤斑点处。',
            en: 'Bright indirect light. Curtain-filtered window spot is ideal. Too dark = leggy growth; direct sun scorches the spotted areas.',
        },
        waterDetail: {
            zh: '表层干后浇水，浇透后排水。不要让盆底积水——最容易烂根。',
            en: 'Water once the top layer is dry, then drain fully. Never leave water in the saucer — root rot is its #1 killer.',
        },
        seasonNote: {
            zh: '9月：两盆均处于适应/恢复期，暂缓换盆，继续观察茎腐切口与新芽情况。',
            en: 'September: both pots are settling in / recovering — repotting is on hold while we watch the cut stem and the new shoot.',
        },
        alert: {
            zh: '9月10日更新：两盆均在适应/恢复期。一株已切除活跃茎腐，一株已有新芽展开。暂缓换盆，继续观察。',
            en: '10 Sept update: both pots settling in / recovering. One had active stem rot cut out; the other has a new shoot unfurling. Repotting on hold, still watching.',
        },
        tips: {
            zh: '• 白点是天然特征，不是病\n• 浇水浇土，不要洒到叶片\n• 开窗通风防白粉病（白色粉末）\n• 不要让盆底积水',
            en: '• White spots are natural, not a disease\n• Water at soil level, keep leaves dry\n• Ventilate to prevent powdery mildew (white dust)\n• Never let the pot sit in water',
        },
    },
    {
        id: 5, nickname: '小羽', latin: 'Goeppertia insignis',
        fullName: { zh: '箭羽竹芋', en: 'Rattlesnake Plant · 箭羽竹芋' },
        sept: { zh: '恢复每月半浓度液肥（容易烧根）。继续只用过滤水。天气转暖湿度压力减小，但注意早春干热天。', en: 'Resume half-strength liquid feed monthly (full strength burns it). Stay on filtered water. Humidity pressure eases, but watch early hot dry spells.' },
        light: 3, water: 4, humidity: 4, waterDays: 4, img: 'images/baobao.jpg', bgClass: 'bg-baobao', textClass: 'text-baobao',
        status: 'warning', locationNo: 3,
        short: {
            zh: '慢性干边+新叶稀少，原因是湿度不足+小盆浇水不稳定。已用3D打印皂碟架高托盘作水库增湿。需要≥60%湿度。',
            en: 'Chronic dry edges and few new leaves, caused by low humidity + inconsistent watering in a small pot. Now using a 3D-printed soap-dish stand to raise the tray as a water reservoir. Needs ≥60% humidity.',
        },
        locationDetail: {
            zh: '主卧窗边遮帘处，与棠棠、青青、猫猫、豹豹放在一起。植物聚集+托盘加水（3D打印皂碟架高）提升局部湿度。帘子过滤的散射光很适合。',
            en: 'Master BR curtain-filtered window, grouped with 棠棠, 青青, 猫猫 & 豹豹. Group humidity + a pebble tray (raised on a 3D-printed soap-dish stand) compensates for no bathroom steam. Filtered light suits it.',
        },
        description: {
            zh: '长披针形叶，豹纹斑纹，叶背紫红色。叶背紫红=健康；褪色=湿度或光照不足。有睡眠运动。目前慢性干边+新叶稀少，原因是湿度不足与小盆浇水不稳定。',
            en: 'Long lance-shaped leaves with leopard markings and purple-red undersides. Rich purple = healthy; fading = low humidity or light. A prayer plant — leaves move at night. Currently has chronic dry edges and few new leaves, caused by low humidity and inconsistent watering in a small pot.',
        },
        lightDetail: {
            zh: '中等散射光。绝对不能直射阳光——叶片会褪色卷曲。帘子过滤的窗边光线即可。',
            en: 'Medium indirect light. Absolutely no direct sun — leaves bleach and curl. Curtain-filtered window light is ideal.',
        },
        waterDetail: {
            zh: '保持微湿，不能干透，湿度≥60%。冬季每3–5天检查一次。必须用过滤水或雨水——自来水含氟会焦边。已用3D打印皂碟架高托盘作水库，帮助维持湿度。',
            en: 'Keep lightly moist, never bone dry, humidity ≥60%. Check every 3–5 days in winter. Filtered or rainwater only — Adelaide tap water fluoride causes crispy brown edges. A 3D-printed soap-dish stand now raises the tray as a water reservoir to help hold humidity.',
        },
        seasonNote: {
            zh: '关键期：湿度管理优先。托盘加水（皂碟架高）+植物聚集是关键。保持18°C以上，远离暖气出风口。',
            en: 'Critical period: humidity first. A raised pebble tray + plant grouping is key. Keep above 18°C, away from heater vents.',
        },
        alert: {
            zh: '只用过滤水或雨水！Adelaide自来水含氟，会导致叶边焦枯。慢性干边+新叶稀少，正用皂碟架高托盘增湿观察改善情况。',
            en: 'Filtered or rainwater only! Adelaide tap water fluoride causes brown crispy edges. Watching for improvement from chronic dry edges and few new leaves, now that the tray is raised on a soap-dish stand for more humidity.',
        },
        tips: {
            zh: '• 叶片晚上收拢（祈祷运动）= 健康信号\n• 叶背紫红变淡=湿度或光线不足\n• 与猫猫、豹豹放在一起提升局部湿度\n• 不要向叶面喷水——会引发真菌斑\n• 小盆浇水不稳定会导致干边，托盘加水更稳定',
            en: '• Leaves folding up at night (prayer movement) = healthy\n• Fading purple undersides = humidity or light too low\n• Group with 猫猫 & 豹豹 to raise local humidity\n• Don\'t mist — it causes fungal spots\n• Inconsistent watering in a small pot causes dry edges — a pebble tray is more consistent',
        },
    },
    {
        id: 7, nickname: '青青', latin: 'Aglaonema',
        fullName: { zh: '万年青', en: 'Chinese Evergreen · 万年青' },
        sept: { zh: '恢复缓释肥。如长势旺、根满盆，春季换盆。继续观察分株苗小万的恢复情况。', en: 'Resume slow-release feeding. Repot in spring if rootbound. Keep an eye on how the divided seedling 小万 is settling in.' },
        light: 3, water: 3, humidity: 2, waterDays: 10, img: 'images/qingqing.jpg', bgClass: 'bg-qingqing', textClass: 'text-qingqing',
        status: 'stable', locationNo: 3,
        short: {
            zh: '土表白毛已通风处理解决，整体健康。此前已分株出小苗"小万"。',
            en: 'White mould on the soil surface resolved with better airflow — overall healthy. Previously divided off the seedling 小万.',
        },
        locationDetail: {
            zh: '落地窗边的遮帘位置，中等散射光。保持稳定，不要移动。',
            en: 'Curtain-filtered spot by the window, medium indirect light. Keep stable, don\'t move.',
        },
        description: {
            zh: '万年青，大叶片配奶白色斑纹。此前误判为花叶万年青（Dieffenbachia），已更正为 Aglaonema。土表曾长白毛，通风处理后已解决，整体健康。',
            en: 'Chinese evergreen with large paddle leaves and cream variegation. Previously misidentified as Dieffenbachia, now corrected to Aglaonema. White mould on the soil surface has resolved with better airflow — overall healthy.',
        },
        lightDetail: {
            zh: '中等散射光，避免直射（斑纹处无UV保护）。帘子过滤的窗边位置合适。',
            en: 'Medium indirect light, no direct sun (the pale patches have no UV protection). Curtain-filtered window spot suits it.',
        },
        waterDetail: {
            zh: '土表3cm干再浇。保持通风，避免盆土表面积水生白毛。',
            en: 'Water when top 3cm is dry. Keep airflow going to stop white mould forming on the soil surface.',
        },
        seasonNote: {
            zh: '9月：整体健康，恢复正常浇水与施肥节奏。',
            en: 'September: overall healthy, back to a normal watering and feeding rhythm.',
        },
        alert: null,
        tips: {
            zh: '• 土表白毛=通风不足，加强空气流通即可解决\n• 物种已更正为 Aglaonema（万年青），非花叶万年青\n• 分株苗小万根系仍在重建中，耐心观察',
            en: '• White mould on the soil surface = not enough airflow — better ventilation fixes it\n• Species corrected to Aglaonema, not Dieffenbachia\n• The divided seedling 小万 is still rebuilding its roots — be patient',
        },
    },
    {
        id: 8, nickname: '贝贝', latin: 'Monstera deliciosa',
        fullName: { zh: '龟背竹', en: 'Monstera · 龟背竹' },
        sept: { zh: '可移到阳台（有顶、散射光）——户外生长快得多，38°C以上搬回。恢复施肥。插条生根后上盆。生长快，检查是否需要换大盆。', en: 'Optional move to the covered alfresco (filtered light) — much faster growth outdoors; bring in above 38°C. Resume feeding. Pot up rooted cuttings. Fast grower — check if it needs a bigger pot.' },
        light: 2, water: 2, humidity: 3, waterDays: 12, img: 'images/beibei.jpg', bgClass: 'bg-beibei', textClass: 'text-beibei',
        status: 'warning', locationNo: 2,
        short: {
            zh: '叶斑病叶已全部剪除，仅剩1片完好叶。已换盆（19cm黑塑料盆，原土+珍珠岩，开水灭菌），根系粗壮健康，观察中。',
            en: 'All leaf-spot leaves cut off — down to a single healthy leaf. Repotted into a 19cm black plastic pot (original mix + perlite, boiling-water sterilised); roots thick and healthy. Under observation.',
        },
        locationDetail: {
            zh: '落地窗边，窗外树木自然过滤光线。每周转90°保持均匀生长。9月气温稳定后可移阳台遮阴处，户外会长得更快。',
            en: 'By the window with naturally filtered light. Rotate 90° weekly for even growth. Can move to the shaded alfresco from September — grows much faster outdoors.',
        },
        description: {
            zh: '龟背竹，爬藤植物，随成长叶片出现孔洞。叶斑病病叶已全剪，仅剩1片完好叶，换盆后观察中；插条仍在自浇水盆中繁殖。',
            en: 'Climbing aroid whose leaves develop splits as it matures. All the leaf-spot damaged leaves were cut off, leaving a single healthy leaf; under observation after repotting. Cuttings still propagating in a two-chamber self-watering pot.',
        },
        lightDetail: {
            zh: '明亮散射光最佳。新叶无孔洞=光线不足，靠近窗口。避免烈日直射，会灼伤大叶片。',
            en: 'Bright indirect is best. New leaves without splits = not enough light, move closer. No harsh direct sun — big leaves burn.',
        },
        waterDetail: {
            zh: '土表5cm干了再浇。换盆后先观察根系恢复情况，避免过湿诱发新一轮叶斑病。',
            en: 'Water when top 5cm is dry. Watch how the roots settle after the repot; avoid overwatering, which triggers another round of leaf spot.',
        },
        seasonNote: {
            zh: '9月：换盆后处于观察期，叶片少，恢复需要时间。气温稳定后可移到阳台遮阴处——户外会长得更快。',
            en: 'September: freshly repotted and under observation with very few leaves — recovery takes time. Once temps hold steady it can move to the shaded alfresco, where it grows much faster.',
        },
        alert: {
            zh: '9月10日更新：叶斑病病叶已全剪，仅剩1片完好叶，已换至19cm黑塑料盆（原土+珍珠岩，开水灭菌）。根系粗壮健康，持续观察中。',
            en: '10 Sept update: all leaf-spot leaves cut off, down to a single healthy leaf. Repotted into a 19cm black plastic pot (original mix + perlite, boiling-water sterilised). Roots are thick and healthy — keep watching.',
        },
        tips: {
            zh: '• 每周转90°，保证各面均匀受光\n• 气生根不要剪——引导到苔藓柱或土里\n• 换盆后先观察根系，别急着追肥\n• 新叶展开后孔洞会更多更大',
            en: '• Rotate 90° weekly for even light\n• Never cut aerial roots — guide them to the moss pole or soil\n• Watch the roots after repotting before feeding again\n• Leaves get bigger and more split over time',
        },
    },
    {
        id: 9, nickname: 'Lili', latin: 'Spathiphyllum',
        fullName: { zh: '白掌 · Peace Lily', en: 'Peace Lily · 白掌' },
        sept: { zh: '检查8月换土后的恢复情况，如根系仍有问题再换一次土。移到稍亮的散射光位置促开花。恢复每月平衡液肥（换土满6–8周后）。', en: 'Check how it recovered from the August repot; repot again if the roots still look bad. Move to slightly brighter indirect light to trigger flowering. Resume balanced monthly feed (6–8 weeks after the repot).' },
        light: 1, water: 4, humidity: 3, waterDays: 8, hold: true, img: 'images/lili.jpg', bgClass: 'bg-lili', textClass: 'text-lili',
        status: 'danger', locationNo: 5,
        short: {
            zh: '🚨 茎腐复发（冠腐/茎腐）。已切除病变组织至健康切面，精甲·噻霉灵消毒后换盆晾干切口。仅剩1片叶。',
            en: '🚨 Stem rot has recurred (crown/stem rot). Cut back to healthy tissue, disinfected with metalaxyl·hymexazol, repotted and left the cut to air-dry. Down to 1 leaf.',
        },
        holdNote: {
            zh: '换盆晾干切口期间暂停浇水，等切面完全愈合、土干透后再少量浇水。旧盆土已视为污染源丢弃。',
            en: 'Watering paused while the cut surface air-dries after repotting; resume sparingly once the cut has calloused and the soil is fully dry. The old potting mix was treated as contaminated and discarded.',
        },
        locationDetail: {
            zh: '一楼客厅窗边。茎腐复发（冠腐/茎腐），已切除病变组织至健康切面，精甲·噻霉灵消毒后换盆。旧盆土视为污染源已丢弃。放通风、避风口、避直射的位置晾干切口。',
            en: 'Ground-floor living room window. Stem rot has recurred (crown/stem rot) — cut back to healthy tissue, disinfected with metalaxyl·hymexazol, repotted. The old potting mix was treated as contaminated and discarded. Keep it somewhere ventilated, out of drafts and direct sun while the cut air-dries.',
        },
        description: {
            zh: '白掌，最耐阴的植物。叶片下垂是完美的缺水信号。2026年8月因根茎白霉换土消毒，9月茎腐复发，再次切除病变组织、消毒换盆，仅剩1片叶。',
            en: 'The most shade-tolerant plant in the collection. Drooping is its built-in watering signal. Repotted and disinfected in August 2026 after white mould at the crown; stem rot recurred in September, requiring another cut-back, disinfection and repot — now down to 1 leaf.',
        },
        lightDetail: {
            zh: '散射光即可，可耐阴。不需要很多光也能生存。避免任何直射阳光——会晒伤。',
            en: 'Happy in indirect or low light. Avoid any direct sun — it scorches easily.',
        },
        waterDetail: {
            zh: '等叶片开始微微下垂再浇，浇透。冬季约每7–10天。叶片倒下=浇水后几小时就会站起来。',
            en: 'Wait for a slight droop, then water thoroughly. Winter: roughly every 7–10 days. It perks back up within hours of watering.',
        },
        seasonNote: {
            zh: '冬季：换土后完全停水，不施肥。保持通风、远离暖气直吹。叶片下垂信号在恢复期不适用——先看土干不干。',
            en: 'Winter: no watering after the repot, no fertiliser. Keep ventilated and away from direct heater airflow. Ignore the droop signal while it recovers — check the soil instead.',
        },
        alert: {
            zh: '🚨 9月10日更新：茎腐复发（冠腐/茎腐）。已切除病变组织至健康切面，精甲·噻霉灵消毒后换盆，晾干切口。仅剩1片叶。旧盆土视为污染源已丢弃——密切观察是否再次复发。',
            en: '🚨 10 Sept update: stem rot has recurred (crown/stem rot). Cut back to healthy tissue, disinfected with metalaxyl·hymexazol, repotted and left the cut to air-dry. Down to 1 leaf. The old potting mix was treated as contaminated and discarded — watch closely for another recurrence.',
        },
        tips: {
            zh: '• 换土后不要施肥（6–8周）\n• 换土后暂时不看下垂信号——先摸土\n• 反复茎腐复发=积水+通风不足，排水土+通风是关键\n• 修根/切除病变组织后剪口晾干再上盆\n• 旧盆土已视为污染源丢弃，不再重复使用\n• 自来水有褐色焦尖=换过滤水',
            en: '• No fertiliser for 6–8 weeks after repotting\n• Ignore the droop signal for now — check the soil instead\n• Repeated stem rot = waterlogging + poor airflow; free-draining mix and airflow are the fix\n• Let cut roots/tissue air-dry before potting up\n• The old potting mix was discarded as contaminated — don\'t reuse it\n• Brown tips from tap water = switch to filtered',
        },
    },
    {
        id: 10, nickname: '刺刺', latin: 'Cactus',
        fullName: { zh: '仙人掌', en: 'Cactus · 仙人掌' },
        sept: { zh: '夜温回暖后恢复少量浇水（每2–4周，土全干再浇）。顶芽修剪促分枝。不用施肥。', en: 'Resume sparse watering once nights warm (every 2–4 weeks, only when bone dry). Tip-prune the growing point to encourage branching. No fertiliser.' },
        light: 5, water: 1, humidity: 1, waterDays: null, img: 'images/cici.jpg', bgClass: 'bg-cici', textClass: 'text-cici',
        status: 'stable', locationNo: 8,
        short: {
            zh: '庭院屋檐下，位置完美。冬季完全不管它。',
            en: 'Yard, under the roof — perfect spot. Ignore it completely in winter.',
        },
        locationDetail: {
            zh: '庭院屋檐下——避雨又有光照，已经是最理想的永久位置。',
            en: 'In the yard under the roof — light without rain on the soil. Already in its ideal permanent spot.',
        },
        description: {
            zh: '蓝柱仙人掌，最省心的植物。屋檐下避雨，冬季休眠。',
            en: 'Blue columnar cactus — the lowest-maintenance plant in the collection. Rain-sheltered under the roof, dormant through winter.',
        },
        lightDetail: {
            zh: '全日照最佳。屋檐下的明亮位置已经足够。',
            en: 'Full sun is best. Its bright spot under the eaves works well.',
        },
        waterDetail: {
            zh: '冬季完全不浇水。春夏每2–4周一次，土完全干透再浇。',
            en: 'No water at all in winter. Spring/summer: every 2–4 weeks, only when fully dry.',
        },
        seasonNote: {
            zh: '冬季：不浇水、不施肥、不移动。完全不管它就是最好的照顾。',
            en: 'Winter: no water, no fertiliser, no moving. Total neglect is the correct care.',
        },
        alert: null,
        tips: {
            zh: '• 冬季完全不浇水——湿+冷=烂根\n• 屋檐下避雨的位置很关键\n• 春天恢复浇水前确认夜温回升\n• 小心刺，移动时用厚手套或夹子',
            en: '• Zero water in winter — wet + cold = rot\n• The rain-sheltered spot is what keeps it alive\n• Wait for warmer nights before resuming water in spring\n• Mind the spines — thick gloves or tongs to move it',
        },
    },
    {
        id: 11, nickname: '蜘蛛', latin: 'Agapanthus',
        fullName: { zh: '非洲百合（待开花确认）', en: 'Agapanthus (species TBC once it flowers) · 非洲百合' },
        sept: { zh: '春季恢复正常浇水，开始每月施肥（高钾肥促花）。花期通常在11月–1月。', en: 'Resume normal watering in spring and start monthly feeding (high-potassium for flowers). Blooms typically Nov–Jan.' },
        light: 5, water: 2, humidity: 1, waterDays: null, img: 'images/zhizhu.jpg', bgClass: 'bg-zhizhu', textClass: 'text-zhizhu',
        status: 'stable', locationNo: 8,
        short: {
            zh: '耐旱强健，全日照或半阴。干透再浇。',
            en: 'Tough and drought-tolerant. Full sun or part shade. Water when dry.',
        },
        locationDetail: {
            zh: '室外永久位置。全日照最佳，半阴也可以。Adelaide气候非常适合。',
            en: 'Permanent outdoor spot. Full sun is best, part shade is fine too. Thrives in Adelaide\'s climate.',
        },
        description: {
            zh: '非洲百合，南非原产多年生植物。花期开出蓝紫色球形花序，非常壮观。极其耐旱，Adelaide气候理想。',
            en: 'South African perennial known for its stunning spherical blue-purple flower clusters. Extremely drought-tolerant — thrives in Adelaide\'s climate.',
        },
        lightDetail: {
            zh: '全日照最好，开花更多更旺。半阴也可以生存但花量减少。',
            en: 'Full sun for best flowering. Tolerates part shade but produces fewer blooms.',
        },
        waterDetail: {
            zh: '耐旱，干透再浇。冬季几乎不需要浇水。过多水分会导致根腐。',
            en: 'Drought-tolerant — water only when fully dry. Almost no watering needed in winter. Overwatering causes root rot.',
        },
        seasonNote: {
            zh: '冬季：几乎不需要照顾。减少浇水，不施肥。叶片可能部分枯黄，正常现象。',
            en: 'Winter: almost zero care needed. Reduce water, no fertiliser. Some leaf yellowing is normal.',
        },
        alert: null,
        tips: {
            zh: '• 极其耐旱——宁干勿湿\n• 全日照开花最多\n• Adelaide气候非常适合，不怕热\n• 冬季叶片部分枯黄是正常的\n• 根系强壮，可在原位生长多年',
            en: '• Very drought-tolerant — better dry than wet\n• Full sun = most flowers\n• Loves Adelaide climate, heat-tolerant\n• Some winter leaf yellowing is normal\n• Strong root system, happy in same spot for years',
        },
    },
    {
        id: 12, nickname: '铂金', latin: 'Philodendron Birkin',
        fullName: { zh: '比尔金喜林芋', en: 'Philodendron Birkin · 比尔金喜林芋' },
        sept: { zh: '恢复每月缓释肥。检查光照——条纹消失说明光不够，靠近窗口。生长旺盛可考虑换盆。', en: 'Resume monthly slow-release feed. Check light — fading stripes mean not enough light, move closer to window. Repot if fast-growing.' },
        light: 4, water: 2, humidity: 3, waterDays: 12, img: 'images/bojin.jpg', bgClass: 'bg-bojin', textClass: 'text-bojin', toxic: true,
        status: 'stable', locationNo: 2,
        short: {
            zh: '状态最佳，无需处理。表层2–3cm干后浇透，避积水。⚠️对猫狗有毒。',
            en: 'In its best condition — no treatment needed. Water thoroughly when top 2–3cm is dry, avoid waterlogging. ⚠️ Toxic to cats and dogs.',
        },
        locationDetail: {
            zh: '主卧落地窗边，明亮散射光。需要充足光照维持标志性白色条纹。',
            en: 'Master bedroom by the window, bright indirect light. Needs good light to maintain its signature white pinstripes.',
        },
        description: {
            zh: '比尔金喜林芋，深绿色叶片上有精致的白色条纹。自清洁变异品种，光照不足时条纹会退化为纯绿色。',
            en: 'A self-heading philodendron with striking white pinstripes on dark green leaves. A sport mutation — stripes revert to plain green without enough light.',
        },
        lightDetail: {
            zh: '明亮散射光。光线不足时新叶条纹会消失，变成纯绿色。避免直射阳光灼伤。',
            en: 'Bright indirect light. New leaves lose their pinstripes in low light, reverting to solid green. Avoid direct sun — scorches.',
        },
        waterDetail: {
            zh: '表层2–3cm干后浇透，确保排水良好，避免积水。冬季每10–14天。',
            en: 'Water thoroughly when top 2–3cm is dry. Ensure good drainage — never let it sit in water. Every 10–14 days in winter.',
        },
        seasonNote: {
            zh: '冬季：减少浇水，不施肥。保持在明亮散射光位置。',
            en: 'Winter: reduce watering, no fertiliser. Keep in bright indirect light.',
        },
        alert: null,
        tips: {
            zh: '• 白条纹消失 = 光线不够，靠近窗口\n• 避免积水，排水很重要\n• 偶尔出现全白叶片是正常变异\n• 全白叶片没有叶绿素，可能会枯萎\n• 生长速度中等，不需要频繁换盆',
            en: '• Stripes fading = not enough light, move closer to window\n• Good drainage is critical — no waterlogging\n• Occasional all-white leaves are normal mutations\n• All-white leaves lack chlorophyll and may die off\n• Moderate grower, doesn\'t need frequent repotting',
        },
    },
    {
        id: 13, nickname: '琴琴', latin: 'Ficus lyrata',
        fullName: { zh: '琴叶榕', en: 'Fiddle Leaf Fig · 琴叶榕' },
        sept: { zh: '恢复缓释肥。春季是换盆好时机（如根满盆）。天暖后擦叶，可考虑塑形修剪促分枝。', en: 'Resume slow-release feed. Spring is the window to repot if rootbound. Wipe leaves; optional shaping prune for branching once warm.' },
        light: 4, water: 2, humidity: 2, waterDays: 16, img: 'images/qinqin.jpg', bgClass: 'bg-qinqin', textClass: 'text-qinqin',
        status: 'stable', locationNo: 2,
        short: {
            zh: '落地窗明亮散射光。土干3–4cm再浇，最怕移动。',
            en: 'Bright indirect at the floor window. Water when 3–4cm dry; hates being moved.',
        },
        locationDetail: {
            zh: '主卧落地窗边，明亮散射光。大型植物需固定位置——琴叶榕最怕换位，移动后容易落叶。',
            en: 'Master BR floor window, bright indirect. A big plant that needs a fixed spot — fiddle leaf figs drop leaves when moved.',
        },
        description: {
            zh: '琴叶榕，大而有光泽的提琴形叶片。对环境变化敏感：怕移动、怕冷风、怕忽干忽湿。',
            en: 'Fiddle leaf fig with large glossy violin-shaped leaves. Sensitive to change — dislikes being moved, cold drafts, and inconsistent watering.',
        },
        lightDetail: {
            zh: '明亮散射光，越多越好。靠近落地窗但避开正午烈日直射。光照不足会掉下部叶片。',
            en: 'Bright indirect, the more the better. By the floor window but out of harsh midday sun. Too little light drops the lower leaves.',
        },
        waterDetail: {
            zh: '土表3–4cm干透再浇，冬季约2–3周一次。浇透后彻底排水，切忌积水。忽干忽湿会掉叶。',
            en: 'Water when top 3–4cm is dry — roughly every 2–3 weeks in winter. Drain fully, never waterlogged. Inconsistent watering causes leaf drop.',
        },
        seasonNote: {
            zh: '冬季：减少浇水，不施肥。远离暖气与冷风口，保持位置稳定。',
            en: 'Winter: less water, no fertiliser. Keep away from heater vents and cold drafts; leave it in place.',
        },
        alert: null,
        tips: {
            zh: '• 定好位置就别移动——移动=落叶\n• 每月擦叶除尘，帮助光合\n• 保持规律浇水，避免掉叶\n• 掉下部叶=光线或水分不稳',
            en: '• Pick a spot and leave it — moving = leaf drop\n• Wipe leaves monthly to help photosynthesis\n• Keep watering regular to avoid leaf drop\n• Lower leaves dropping = light or watering inconsistent',
        },
    },
    {
        id: 14, nickname: '星星', latin: "Monstera deliciosa 'Thai Constellation'",
        fullName: { zh: '泰国星空龟背竹', en: 'Thai Constellation · 泰国星斑龟背竹' },
        sept: { zh: '如叶斑病期间根系受损则换土。恢复缓释肥。引导气根上苔藓柱。保持稳定散射光，避免斑叶灼伤。', en: 'Repot if the roots were damaged during the leaf-spot episode. Resume slow-release feeding. Guide aerial roots onto the moss pole. Keep stable indirect light to avoid scorching the variegation.' },
        light: 3, water: 2, humidity: 3, waterDays: 12, img: 'images/xingxing.jpg', bgClass: 'bg-xingxing', textClass: 'text-xingxing',
        status: 'warning', locationNo: 3,
        short: {
            zh: '已提前换盆（Osmocote室内土）。白化坏死叶剪除，叶斑病斑点已处理。落地窗边稳定间接光，避免直射晒伤白斑。',
            en: 'Repotted early into Osmocote Indoor mix. Bleached/necrotic leaves removed, leaf-spot patches treated. Stable indirect light by the floor window — kept out of direct sun to protect the white variegation.',
        },
        locationDetail: {
            zh: '主卧落地窗边，稳定间接光。奶白斑叶没有叶绿素，直射会灼伤发褐——必须避免直晒。',
            en: 'Master BR floor window, stable indirect light. The cream patches have no chlorophyll and scorch brown in direct sun — keep it out of direct light.',
        },
        description: {
            zh: '龟背竹的奶白斑锦品种，每片叶斑纹独一无二。已提前换盆，白化坏死叶与叶斑病斑点已处理，生长比普通龟背竹慢，斑叶部分较脆弱。',
            en: 'The cream-variegated Monstera — every leaf is unique. Repotted early; bleached/necrotic leaves and leaf-spot patches have been dealt with. Slower-growing than the plain species, with more fragile variegated tissue.',
        },
        lightDetail: {
            zh: '明亮但柔和的间接光，落地窗边稳定散射光最佳。光太弱新叶返绿失斑；直射则灼伤白斑。',
            en: 'Bright but gentle indirect light — stable indirect light by the floor window is ideal. Too little and new leaves revert to green; direct sun scorches the white.',
        },
        waterDetail: {
            zh: '表层2–3cm干透再浇。斑叶品种更怕烂根，务必排水良好。',
            en: 'Water when the top 2–3cm is dry. Variegated types rot more easily, so drainage is critical.',
        },
        seasonNote: {
            zh: '9月：换盆后恢复正常浇水节奏（表层干透再浇）。保持稳定光照和温度，避免直射，保护斑叶。',
            en: 'September: back to a normal watering rhythm after repotting (water once the top layer is dry). Keep light and temperature stable and out of direct sun to protect the variegation.',
        },
        alert: {
            zh: '9月10日更新：已提前换盆（Osmocote室内土），白化坏死叶剪除，叶斑病斑点处理完毕。落地窗边稳定间接光，避免直射晒伤白斑。',
            en: '10 Sept update: repotted early into Osmocote Indoor mix; bleached/necrotic leaves removed and leaf-spot patches treated. Stable indirect light by the floor window, kept out of direct sun to protect the variegation.',
        },
        tips: {
            zh: '• 剪除病叶后剪刀要消毒再剪下一片\n• 白斑会灼伤——绝不能直射阳光\n• 新叶返绿=光线不足，靠近窗\n• 排水要好，斑叶品种更易烂根',
            en: '• Sterilise the scissors between each leaf you cut\n• White patches scorch — never direct sun\n• New leaves reverting to green = too little light\n• Great drainage — variegated types rot easier',
        },
    },
    {
        id: 15, nickname: '鸟鸟', latin: 'Strelitzia nicolai',
        fullName: { zh: '大鹤望兰 · 天堂鸟', en: 'Giant Bird of Paradise · 大鹤望兰' },
        sept: { zh: '夜温稳定回暖后搬回主卧阳台全日照。恢复正常浇水与施肥（生长旺盛，喜肥）。长得快、根系强，可换大盆。', en: 'Move back out to the master BR balcony in full sun once nights stay warm. Resume normal watering and feeding (a hungry, vigorous grower). Fast-growing with strong roots — pot up if needed.' },
        light: 5, water: 3, humidity: 2, waterDays: null, img: 'images/niaoniao.jpg', bgClass: 'bg-niaoniao', textClass: 'text-niaoniao',
        status: 'stable', locationNo: 1,
        short: {
            zh: '已搬回主卧阳台户外，疑似蜗牛损伤。全日照/半阴，保持微湿，耐雨无需移入室内。',
            en: 'Back outside on the master BR balcony; possible snail damage. Full sun/part shade, keep lightly moist — tolerates rain, no need to bring in.',
        },
        locationDetail: {
            zh: '主卧阳台户外，全日照/半阴。9月气温回暖，已从室内搬回阳台原位。',
            en: 'Master BR balcony, outdoors, full sun/part shade. Moved back out to its usual balcony spot as September temperatures warmed.',
        },
        description: {
            zh: '大鹤望兰，巨型芭蕉状叶片，成株开白蓝色鸟形花。生长迅速、强健，可长到8m。叶片近期有疑似蜗牛损伤痕迹。',
            en: 'Giant bird of paradise with huge banana-like leaves; mature plants bear white-and-blue bird-shaped flowers. Fast, tough, can reach 8m. Recent leaf damage suspected to be from snails.',
        },
        lightDetail: {
            zh: '全日照最佳，也耐半阴。光越足叶片越挺拔、越易开花。',
            en: 'Full sun is best, tolerates part shade. More light = sturdier leaves and better flowering.',
        },
        waterDetail: {
            zh: '保持微湿，浇水要透。耐雨，无需因下雨移入室内。耐旱但不耐长期积水。',
            en: 'Keep lightly moist, watering deeply. Rain-tolerant — no need to bring it in when it rains. Drought-tolerant but not waterlogging.',
        },
        seasonNote: {
            zh: '9月：已搬回阳台户外，全日照/半阴，恢复正常浇水节奏。',
            en: 'September: back outside on the balcony, full sun/part shade, back to a normal watering rhythm.',
        },
        alert: {
            zh: '9月10日更新：已搬回阳台户外，叶片疑似有蜗牛损伤，持续观察是否继续出现新的啃食痕迹。',
            en: '10 Sept update: back outside on the balcony; leaves show suspected snail damage — keep watching for fresh bite marks.',
        },
        tips: {
            zh: '• 叶片撕裂正常——是抗风适应，不是病\n• 疑似蜗牛损伤，留意夜间蜗牛活动\n• 全日照才会长快、开花\n• 生长快，注意及时换大盆\n• 耐雨，不需要因下雨移入室内',
            en: '• Split leaves are normal — wind adaptation, not disease\n• Suspected snail damage — watch for night-time snail activity\n• Full sun for fast growth and flowers\n• Fast grower — pot up in time\n• Rain-tolerant, no need to bring it in for rain',
        },
    },
    {
        id: 16, nickname: '斑斑', latin: 'Haworthiopsis attenuata',
        fullName: { zh: '条纹十二卷', en: 'Zebra Haworthia · 条纹十二卷' },
        sept: { zh: '9月换浅盆+仙人掌专用土。恢复少量浇水（土全干再浇）。晒斑褪去、恢复绿色即算健康。', en: 'September: repot into a shallow pot + cactus mix. Resume light watering (only when bone dry). Once the sun-stress purple fades back to green it has recovered.' },
        light: 4, water: 1, humidity: 1, waterDays: null, img: 'images/banban.jpg', bgClass: 'bg-banban', textClass: 'text-banban',
        status: 'warning', locationNo: 2,
        short: {
            zh: '斑马纹多肉。晒伤发紫恢复中。冬季几乎不浇水。',
            en: 'Zebra-striped succulent. Sun-stressed purple, recovering. Barely water in winter.',
        },
        locationDetail: {
            zh: '主卧窗边明亮散射光，但避开正午直射（当前晒伤发紫恢复中）。浅根多肉，用浅盆最好。',
            en: 'Master BR bright indirect, but out of harsh midday sun (currently recovering from sun-stress). A shallow-rooted succulent — a shallow pot suits it best.',
        },
        description: {
            zh: '条纹十二卷，叶片深绿带白色凸起横纹，形似斑马/芦荟。极耐旱、好养。晒过头会发紫红——遮荫后会恢复绿色。',
            en: 'Zebra haworthia — dark leaves with raised white stripes, aloe-like. Very drought-tolerant and easy. Over-sun turns it purple-red; it greens back up once shaded.',
        },
        lightDetail: {
            zh: '明亮散射光最佳。可耐一些直射，但当前已晒伤，先放散射光处恢复。光太暗会徒长松散。',
            en: 'Bright indirect is best. Tolerates some direct sun but it is currently stressed — keep it in indirect light to recover. Too dark and it stretches loose.',
        },
        waterDetail: {
            zh: '冬季几乎不浇水（每3–4周或更久，土完全干透）。浇水浇土不浇叶心，积水必烂。',
            en: 'Barely water in winter (every 3–4 weeks or less, only when bone dry). Water the soil, not the crown; waterlogging rots it.',
        },
        seasonNote: {
            zh: '冬季：几乎不浇水，不施肥，不移动。9月换浅盆+仙人掌土后恢复少量浇水。',
            en: 'Winter: almost no water, no fertiliser, leave it be. Resume light watering after the September repot into shallow pot + cactus mix.',
        },
        alert: {
            zh: '晒伤发紫恢复中：移到明亮散射光（非直射），让它慢慢返绿。',
            en: 'Recovering from sun-stress: keep in bright indirect (not direct) light and let it green back up.',
        },
        tips: {
            zh: '• 发紫红=晒过头，遮荫后返绿\n• 极耐旱——宁干勿湿\n• 浅根，浅盆+排水好最合适\n• 叶心别积水，会烂\n• 几乎不用管，最省心',
            en: '• Purple-red = too much sun; greens back in shade\n• Very drought-tolerant — dry over wet\n• Shallow roots — shallow pot + good drainage\n• Keep water out of the crown or it rots\n• Almost zero maintenance',
        },
    },
    {
        id: 17, nickname: '龟龟', latin: 'Monstera deliciosa',
        fullName: { zh: '龟背竹', en: 'Monstera · 龟背竹' },
        sept: { zh: '缓苗结束后可考虑换盆。恢复正常光照观察生长速度，检查是否需要苔藓柱。', en: 'Consider repotting once it has settled in. Watch growth once in a normal light spot, and check whether it needs a moss pole.' },
        light: 2, water: 2, humidity: 3, waterDays: 12, img: 'images/guigui.jpg', bgClass: 'bg-guigui', textClass: 'text-guigui',
        status: 'warning', locationNo: 2,
        short: {
            zh: '2026年9月5日IKEA购入，最大叶已确认有裂痕。已浇透水，缓苗适应期，暂不换盆。',
            en: 'Bought from IKEA 5 Sept 2026; the biggest leaf already shows a split. Watered thoroughly, settling in — no repot yet.',
        },
        locationDetail: {
            zh: '主卧窗边，明亮散射光，靠近贝贝。新到植株，暂时保持环境稳定，不换盆不移动。',
            en: 'Master BR window, bright indirect, near 贝贝. Newly arrived — keep the environment stable, no repotting or moving yet.',
        },
        description: {
            zh: '龟背竹（普通绿色品种）。2026年9月5日IKEA购入，最大叶已确认有裂痕（成熟健康的迹象）。已浇透水，正处于缓苗适应期。',
            en: 'Monstera deliciosa, plain green. Bought from IKEA on 5 Sept 2026; the biggest leaf already shows a split (a sign of healthy maturity). Watered thoroughly, currently in its acclimation period.',
        },
        lightDetail: {
            zh: '明亮散射光最佳，新叶无孔洞=光线不足。避免烈日直射。',
            en: 'Bright indirect is best; new leaves without splits mean not enough light. No harsh direct sun.',
        },
        waterDetail: {
            zh: '刚到家已浇透水。缓苗期间土表干透再浇，避免过湿。暂不换盆——先适应新环境。',
            en: 'Watered thoroughly on arrival. Water again once the top layer is dry while it settles in — avoid overwatering. No repotting yet — let it adjust first.',
        },
        seasonNote: {
            zh: '9月：新到植株，缓苗适应期，暂不换盆，环境保持稳定。',
            en: 'September: newly arrived, settling in — no repotting yet, keep the environment stable.',
        },
        alert: {
            zh: '9月5日IKEA购入，最大叶已确认有裂痕。已浇透水，缓苗适应期，暂不换盆。',
            en: 'Bought from IKEA on 5 Sept; the biggest leaf already shows a split. Watered thoroughly, settling in — no repot for now.',
        },
        tips: {
            zh: '• 新到植株先稳定环境，不要频繁移动\n• 叶片有裂痕是健康成熟的迹象\n• 缓苗期避免频繁浇水或施肥\n• 与贝贝同科，养护方式类似',
            en: '• Keep a new arrival\'s environment stable, don\'t move it around\n• A split leaf is a sign of healthy maturity\n• Avoid frequent watering or feeding while it settles in\n• Same family as 贝贝 — similar care',
        },
    },
    {
        id: 18, nickname: '小万', latin: 'Aglaonema',
        fullName: { zh: '万年青（分株苗）', en: 'Chinese Evergreen (division) · 万年青' },
        sept: { zh: '根系重建完成后恢复缓释肥。观察长势是否追上青青。', en: 'Resume slow-release feed once the roots have rebuilt. Watch whether growth catches up to 青青.' },
        light: 3, water: 3, humidity: 2, waterDays: 10, img: 'images/xiaowan.jpg', bgClass: 'bg-xiaowan', textClass: 'text-xiaowan',
        status: 'stable', locationNo: 3,
        short: {
            zh: '青青分株小苗，2026年9月5日记录。叶片健康但长势缓慢（根系重建中）。',
            en: 'Divided seedling from 青青, recorded 5 Sept 2026. Leaves healthy but growing slowly while its roots rebuild.',
        },
        locationDetail: {
            zh: '与青青同处落地窗边遮帘位置，中等散射光。',
            en: 'Same curtain-filtered window spot as 青青, medium indirect light.',
        },
        description: {
            zh: '万年青，从青青分株而来的小苗。叶片健康，但因分株后根系仍在重建，长势比青青缓慢。',
            en: 'Chinese evergreen, a division from 青青. Leaves are healthy, but growth is slower than 青青\'s while the roots rebuild after division.',
        },
        lightDetail: {
            zh: '中等散射光，避免直射。与青青养护方式相同。',
            en: 'Medium indirect light, no direct sun. Same care as 青青.',
        },
        waterDetail: {
            zh: '土表3cm干再浇，分株苗根系较弱，避免过湿。',
            en: 'Water when top 3cm is dry. Roots are still weak post-division — avoid overwatering.',
        },
        seasonNote: {
            zh: '9月：分株苗根系重建中，长势缓慢属正常，耐心等待。',
            en: 'September: roots are rebuilding after division — slow growth is normal, be patient.',
        },
        alert: null,
        tips: {
            zh: '• 长势缓慢是分株后正常现象，不用担心\n• 避免过度浇水，根系仍在重建\n• 与青青同源，物种为 Aglaonema（万年青）',
            en: '• Slow growth is normal right after division — no cause for concern\n• Avoid overwatering while the roots rebuild\n• Same origin as 青青 — species is Aglaonema',
        },
    },
    {
        id: 19, nickname: '心心', latin: "Syngonium podophyllum 'Red Heart'",
        fullName: { zh: '合果芋 · 红心', en: "Red Heart Syngonium · 合果芋" },
        sept: { zh: '恢复缓释肥。检查生长速度，需要时可加设支撑。持续严格隔离宠物。', en: 'Resume slow-release feed. Check growth rate and add support if needed. Keep strictly isolated from pets throughout.' },
        light: 3, water: 3, humidity: 3, waterDays: 10, img: 'images/xinxin.jpg', bgClass: 'bg-xinxin', textClass: 'text-xinxin', toxic: true,
        status: 'stable', locationNo: 2,
        short: {
            zh: '合果芋红心。明亮散射光，表土干后浇水，放主卧。⚠️含草酸钙对猫狗有毒，须严格隔离。',
            en: 'Red Heart syngonium. Bright indirect light, water once the topsoil is dry, kept in the master bedroom. ⚠️ Contains calcium oxalate, toxic to cats and dogs — must be kept strictly isolated.',
        },
        locationDetail: {
            zh: '主卧，明亮散射光。因对猫狗有毒，严格隔离在宠物无法进入的位置。',
            en: 'Master bedroom, bright indirect light. Kept strictly isolated somewhere pets can\'t reach, since it\'s toxic to them.',
        },
        description: {
            zh: '合果芋"红心"品种，箭形叶片带粉红/红色斑纹，观赏性强。含草酸钙，对猫狗有毒。',
            en: 'Syngonium podophyllum \'Red Heart\' — arrow-shaped leaves with pink/red variegation, very ornamental. Contains calcium oxalate, toxic to cats and dogs.',
        },
        lightDetail: {
            zh: '明亮散射光，避免直射灼伤叶片斑纹。',
            en: 'Bright indirect light; direct sun scorches the variegated patches.',
        },
        waterDetail: {
            zh: '表土干后浇水，避免积水烂根。',
            en: 'Water once the topsoil is dry; avoid waterlogging.',
        },
        seasonNote: {
            zh: '9月：正常养护，注意持续严格隔离宠物。',
            en: 'September: normal care — keep it strictly off-limits to pets at all times.',
        },
        alert: {
            zh: '⚠️含草酸钙，对猫狗有毒，须严格隔离，不可放在宠物可接触的位置。',
            en: '⚠️ Contains calcium oxalate — toxic to cats and dogs. Must be strictly isolated from any area pets can access.',
        },
        tips: {
            zh: '• 严格隔离，绝不能让猫狗接触\n• 明亮散射光维持斑纹鲜艳\n• 表土干后浇水，避免积水\n• 误食须立即就医/兽医',
            en: '• Strictly isolate — never let cats or dogs near it\n• Bright indirect light keeps the variegation vivid\n• Water once the topsoil is dry, avoid waterlogging\n• If ingested, seek vet care immediately',
        },
    },
    {
        id: 20, nickname: '萝萝', latin: 'Epipremnum aureum (variegated)',
        fullName: { zh: '带锦绿萝', en: 'Variegated Pothos · 带锦绿萝' },
        sept: { zh: '适应1–2周后混入珍珠岩改善排水。恢复正常光照观察斑锦表现。持续严格隔离宠物。', en: 'Mix in perlite for drainage after a 1–2 week settling period. Watch how the variegation develops in normal light. Keep strictly isolated from pets throughout.' },
        light: 2, water: 2, humidity: 3, waterDays: 10, img: 'images/luoluo.jpg', bgClass: 'bg-luoluo', textClass: 'text-luoluo', toxic: true,
        status: 'warning', locationNo: 3,
        short: {
            zh: '2026年9月5日IKEA购入。原土偏泥炭保水强透气差，适应1–2周后计划混入珍珠岩。新芽尖此前直晒焦枯，已移至纯散射光。',
            en: 'Bought from IKEA 5 Sept 2026. Original mix is peat-heavy — water-retentive but low airflow; plan to mix in perlite after a 1–2 week settling period. New shoot tips scorched by direct sun before, now moved to pure indirect light.',
        },
        locationDetail: {
            zh: '已移至纯散射光位置，内盆单独取出晾干通风过渡。⚠️含草酸钙对猫狗有毒，须严格隔离。',
            en: 'Moved to a pure indirect-light spot; the inner nursery pot was taken out separately to air out. ⚠️ Contains calcium oxalate, toxic to cats and dogs — must be kept strictly isolated.',
        },
        description: {
            zh: '带锦绿萝，叶片有黄白锦斑。2026年9月5日IKEA购入。原土偏泥炭质保水性强透气差，计划适应1–2周后混入珍珠岩（原土:珍珠岩约3:1或4:1）。',
            en: 'Variegated pothos with cream/yellow variegation. Bought from IKEA on 5 Sept 2026. The original mix is peat-heavy — water-retentive with poor airflow; plan to mix in perlite (roughly 3:1 or 4:1 original mix to perlite) after a 1–2 week settling period.',
        },
        lightDetail: {
            zh: '纯散射光，新芽尖此前因靠窗直晒焦枯，已移至无直射位置。',
            en: 'Pure indirect light — new shoot tips scorched from direct sun by the window before, now moved somewhere without direct light.',
        },
        waterDetail: {
            zh: '原土保水性强，浇水需减少频率，避免积水。内盆已单独取出晾干通风过渡。',
            en: 'The original mix retains a lot of water — water less often, avoid waterlogging. The inner nursery pot has been taken out separately to air-dry.',
        },
        seasonNote: {
            zh: '9月：新到植株，适应1–2周后计划混入珍珠岩改善排水。持续严格隔离宠物。',
            en: 'September: newly arrived — plan to mix in perlite for drainage after a 1–2 week settling period. Keep strictly isolated from pets throughout.',
        },
        alert: {
            zh: '⚠️含草酸钙，对猫狗有毒，须严格隔离。新芽尖曾因直晒焦枯，现已移至纯散射光观察。',
            en: '⚠️ Contains calcium oxalate — toxic to cats and dogs, must be strictly isolated. New shoot tips were scorched by direct sun before — now watched under pure indirect light.',
        },
        tips: {
            zh: '• 严格隔离，绝不能让猫狗接触\n• 原土保水强透气差，适应期后混珍珠岩改善\n• 避免靠窗直晒，新芽尖容易焦枯\n• 内盆单独取出晾干有助过渡',
            en: '• Strictly isolate — never let cats or dogs near it\n• Original mix retains water and drains poorly — mix in perlite after settling in\n• Avoid direct sun by the window, new shoot tips scorch easily\n• Airing out the inner nursery pot helps it transition',
        },
    },
    {
        id: 21, nickname: '猫猫', latin: 'Ctenanthe burle-marxii',
        fullName: { zh: '银羽竹芋 · 鱼骨祈祷植物', en: 'Fishbone Prayer Plant · 银羽竹芋' },
        sept: { zh: '恢复每月半浓度液肥。保持湿度，检查是否需要换盆。', en: 'Resume half-strength monthly feed. Keep humidity up; check if it needs repotting.' },
        light: 3, water: 4, humidity: 4, waterDays: 5, img: 'images/maomao.jpg', bgClass: 'bg-maomao', textClass: 'text-maomao',
        status: 'stable', locationNo: 3,
        short: {
            zh: '银羽竹芋，与豹豹同为原「雀雀」分株而来。此前误判为豹纹卡拉狄亚，已更正。新叶展开旺盛。',
            en: 'Ctenanthe burle-marxii — this and 豹豹 are the two divisions of the original plant (formerly 雀雀). Previously misidentified as Calathea Leopardina, now corrected. Vigorous new leaves unfurling.',
        },
        locationDetail: {
            zh: '主卧窗边遮帘处，与小羽、豹豹、棠棠、青青聚在一起提升局部湿度。',
            en: 'Master BR curtain-filtered window, grouped with 小羽, 豹豹, 棠棠 & 青青 for local humidity.',
        },
        description: {
            zh: '银羽竹芋，鱼骨祈祷植物。原为一盆「雀雀」，已分株成猫猫、豹豹两盆，故不再单列雀雀。此前误判为 Calathea Leopardina，已更正为 Ctenanthe burle-marxii。新叶展开旺盛，长势良好。',
            en: 'Fishbone prayer plant. This was a single plant (雀雀) that was divided into two pots — 猫猫 and 豹豹 — so 雀雀 is no longer listed separately. Previously misidentified as Calathea Leopardina, now corrected to Ctenanthe burle-marxii. Vigorous new leaves currently unfurling.',
        },
        lightDetail: {
            zh: '散射光耐阴，避免直射阳光。',
            en: 'Indirect light, shade-tolerant. Avoid direct sun.',
        },
        waterDetail: {
            zh: '保持湿润，不能干透，湿度托盘辅助增湿。',
            en: 'Keep moist, never bone dry. Pebble tray helps maintain humidity.',
        },
        seasonNote: {
            zh: '9月：长势旺盛，正常养护即可。',
            en: 'September: growing vigorously — normal care is enough.',
        },
        alert: null,
        tips: {
            zh: '• 物种已更正为 Ctenanthe burle-marxii，非 Calathea\n• 与豹豹同株分出，养护方式相同\n• 叶片晚上收拢（祈祷运动）= 健康信号\n• 不要向叶面喷水——会引发真菌斑',
            en: '• Species corrected to Ctenanthe burle-marxii, not Calathea\n• Divided from the same plant as 豹豹 — same care\n• Leaves folding at night (prayer movement) = healthy\n• Don\'t mist — causes fungal spots',
        },
    },
    {
        id: 22, nickname: '豹豹', latin: 'Ctenanthe burle-marxii',
        fullName: { zh: '银羽竹芋 · 鱼骨祈祷植物', en: 'Fishbone Prayer Plant · 银羽竹芋' },
        sept: { zh: '恢复每月半浓度液肥。持续观察新叶萌发速度，保持湿度。', en: 'Resume half-strength monthly feed. Keep watching how quickly new leaves emerge; keep humidity up.' },
        light: 3, water: 4, humidity: 4, waterDays: 5, img: 'images/baobao2.jpg', bgClass: 'bg-baobao2', textClass: 'text-baobao2',
        status: 'stable', locationNo: 3,
        short: {
            zh: '银羽竹芋，与猫猫同为原「雀雀」分株而来。新叶萌发较慢（个体差异），已移入陶瓷溢水孔盆（适合高湿需求）。',
            en: 'Ctenanthe burle-marxii — this and 猫猫 are the two divisions of the original plant (formerly 雀雀). New leaves emerging more slowly (individual variation); moved into the ceramic drainage-hole pot (suits its high humidity needs).',
        },
        locationDetail: {
            zh: '主卧窗边遮帘处，与小羽、猫猫、棠棠、青青聚在一起提升局部湿度。已移入原铂金使用的陶瓷溢水孔盆。',
            en: 'Master BR curtain-filtered window, grouped with 小羽, 猫猫, 棠棠 & 青青 for local humidity. Moved into the ceramic drainage-hole pot previously used by 铂金.',
        },
        description: {
            zh: '银羽竹芋，鱼骨祈祷植物。与猫猫同为原「雀雀」分株而来。此前误判为 Calathea Leopardina，已更正为 Ctenanthe burle-marxii。新叶萌发较慢，属个体差异，非病态。',
            en: 'Fishbone prayer plant. This and 猫猫 are the two divisions of the original plant (formerly 雀雀). Previously misidentified as Calathea Leopardina, now corrected to Ctenanthe burle-marxii. New leaves are emerging more slowly — individual variation, not a health issue.',
        },
        lightDetail: {
            zh: '散射光耐阴，避免直射阳光。',
            en: 'Indirect light, shade-tolerant. Avoid direct sun.',
        },
        waterDetail: {
            zh: '保持湿润，不能干透。陶瓷溢水孔盆有助排水同时保持局部湿度。',
            en: 'Keep moist, never bone dry. The ceramic drainage-hole pot helps drainage while holding local humidity.',
        },
        seasonNote: {
            zh: '9月：新叶萌发较慢，继续观察，个体差异属正常。',
            en: 'September: new leaves emerging slowly — keep watching, this individual variation is normal.',
        },
        alert: null,
        tips: {
            zh: '• 新叶萌发慢是个体差异，非病态\n• 已换入陶瓷溢水孔盆，适合高湿需求\n• 物种已更正为 Ctenanthe burle-marxii，非 Calathea\n• 不要向叶面喷水——会引发真菌斑',
            en: '• Slower new-leaf emergence is individual variation, not a problem\n• Now in a ceramic drainage-hole pot, suited to its humidity needs\n• Species corrected to Ctenanthe burle-marxii, not Calathea\n• Don\'t mist — causes fungal spots',
        },
    },
];
