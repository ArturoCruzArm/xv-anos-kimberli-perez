// ========================================
// GLOBAL VARIABLES
// ========================================
const photos = ["imagenes/1.webp", "imagenes/2.webp", "imagenes/3.webp", "imagenes/4.webp", "imagenes/5.webp", "imagenes/6.webp", "imagenes/7.webp", "imagenes/8.webp", "imagenes/9.webp", "imagenes/10.webp", "imagenes/11.webp", "imagenes/12.webp", "imagenes/13.webp", "imagenes/14.webp", "imagenes/15.webp", "imagenes/16.webp", "imagenes/17.webp", "imagenes/18.webp", "imagenes/19.webp", "imagenes/20.webp", "imagenes/21.webp", "imagenes/ChatGPT Image 23 may 2026, 16_50_28.webp", "imagenes/ChatGPT Image 23 may 2026, 16_51_52.webp", "imagenes/ChatGPT Image 23 may 2026, 16_52_15.webp", "imagenes/ChatGPT Image 23 may 2026, 16_53_39.webp", "imagenes/ChatGPT Image 23 may 2026, 16_54_08.webp", "imagenes/ChatGPT Image 23 may 2026, 16_54_30.webp", "imagenes/ChatGPT Image 23 may 2026, 16_54_35.webp", "imagenes/ChatGPT Image 23 may 2026, 16_55_24.webp", "imagenes/ChatGPT Image 23 may 2026, 16_56_00.webp", "imagenes/ChatGPT Image 23 may 2026, 16_57_12.webp", "imagenes/ChatGPT Image 23 may 2026, 16_57_30.webp", "imagenes/ChatGPT Image 23 may 2026, 16_57_47.webp", "imagenes/ChatGPT Image 23 may 2026, 16_58_16.webp", "imagenes/ChatGPT Image 23 may 2026, 16_58_37.webp", "imagenes/ChatGPT Image 23 may 2026, 16_59_11.webp", "imagenes/ChatGPT Image 23 may 2026, 16_59_34.webp", "imagenes/ChatGPT Image 23 may 2026, 16_59_59.webp", "imagenes/ChatGPT Image 23 may 2026, 17_00_20.webp", "imagenes/ChatGPT Image 23 may 2026, 17_01_08.webp", "imagenes/ChatGPT Image 23 may 2026, 17_01_39.webp", "imagenes/ChatGPT Image 23 may 2026, 17_02_00.webp", "imagenes/ChatGPT Image 23 may 2026, 17_02_15.webp", "imagenes/ChatGPT Image 23 may 2026, 17_02_38.webp", "imagenes/ChatGPT Image 23 may 2026, 17_03_00.webp", "imagenes/ChatGPT Image 23 may 2026, 17_03_16.webp", "imagenes/ChatGPT Image 23 may 2026, 17_03_31.webp", "imagenes/ChatGPT Image 23 may 2026, 17_03_44.webp", "imagenes/ChatGPT Image 23 may 2026, 17_04_09.webp", "imagenes/ChatGPT Image 23 may 2026, 17_04_34.webp", "imagenes/ChatGPT Image 23 may 2026, 17_04_49.webp", "imagenes/ChatGPT Image 23 may 2026, 17_05_02.webp", "imagenes/ChatGPT Image 23 may 2026, 17_05_29.webp", "imagenes/ChatGPT Image 23 may 2026, 17_09_41.webp", "imagenes/ChatGPT Image 23 may 2026, 17_09_45.webp", "imagenes/ChatGPT Image 23 may 2026, 17_10_05.webp", "imagenes/ChatGPT Image 23 may 2026, 17_10_13.webp", "imagenes/DJI_20260506_173224_935.webp", "imagenes/DJI_20260506_173234_595.webp", "imagenes/DJI_20260506_173242_396.webp", "imagenes/DJI_20260506_173249_868.webp", "imagenes/DJI_20260506_173256_647.webp", "imagenes/DJI_20260506_173340_883.webp", "imagenes/DJI_20260506_173345_144.webp", "imagenes/DJI_20260506_173347_828.webp", "imagenes/DJI_20260506_173349_834.webp", "imagenes/DJI_20260506_173355_074.webp", "imagenes/DJI_20260506_173407_538.webp", "imagenes/DJI_20260506_173410_536.webp", "imagenes/DJI_20260506_173413_641.webp", "imagenes/DJI_20260506_173418_669.webp", "imagenes/DJI_20260506_173421_034.webp", "imagenes/DJI_20260506_173423_813.webp", "imagenes/DJI_20260506_173429_288.webp", "imagenes/DJI_20260506_173440_838.webp", "imagenes/DJI_20260506_173442_442.webp", "imagenes/DJI_20260506_173443_810.webp", "imagenes/DJI_20260506_173445_486.webp", "imagenes/DJI_20260506_173446_734.webp", "imagenes/DJI_20260506_173609_266.webp", "imagenes/DJI_20260506_173633_145.webp", "imagenes/DJI_20260506_173637_808.webp", "imagenes/DJI_20260506_173643_583.webp", "imagenes/DJI_20260506_173654_191.webp", "imagenes/DJI_20260506_173656_032.webp", "imagenes/DJI_20260506_173657_937.webp", "imagenes/DJI_20260506_173659_738.webp", "imagenes/DJI_20260506_173701_121.webp", "imagenes/DJI_20260506_173702_591.webp", "imagenes/DJI_20260506_173704_193.webp", "imagenes/DJI_20260506_173705_963.webp", "imagenes/DJI_20260506_173707_656.webp", "imagenes/DJI_20260506_173712_401.webp", "imagenes/DJI_20260506_173714_437.webp", "imagenes/DJI_20260506_173718_086.webp", "imagenes/DJI_20260506_173720_017.webp", "imagenes/DJI_20260506_173724_085.webp", "imagenes/DJI_20260506_174908_774.webp", "imagenes/DJI_20260506_174923_073.webp", "imagenes/DJI_20260506_174926_448.webp", "imagenes/DJI_20260506_174942_753.webp", "imagenes/DJI_20260506_174945_285.webp", "imagenes/DJI_20260506_174946_486.webp", "imagenes/DJI_20260506_175043_399.webp", "imagenes/DJI_20260506_175045_017.webp", "imagenes/DJI_20260506_175046_596.webp", "imagenes/DJI_20260506_175048_291.webp", "imagenes/DJI_20260506_175050_146.webp", "imagenes/DJI_20260506_175051_275.webp", "imagenes/DJI_20260506_175053_087.webp", "imagenes/DJI_20260506_175054_691.webp", "imagenes/DJI_20260506_175406_985.webp", "imagenes/DJI_20260506_175411_619.webp", "imagenes/DJI_20260506_175641_396.webp", "imagenes/DJI_20260506_175643_477.webp", "imagenes/DJI_20260506_175646_903.webp", "imagenes/DJI_20260506_175650_921.webp", "imagenes/DJI_20260506_175652_406.webp", "imagenes/DJI_20260506_175654_145.webp", "imagenes/DJI_20260506_175656_004.webp", "imagenes/DJI_20260506_175659_113.webp", "imagenes/DJI_20260506_175700_537.webp", "imagenes/DJI_20260506_175703_071.webp", "imagenes/DJI_20260506_175704_408.webp", "imagenes/DJI_20260506_175706_548.webp", "imagenes/DJI_20260506_175707_826.webp", "imagenes/DJI_20260506_175710_176.webp", "imagenes/DJI_20260506_175712_943.webp", "imagenes/DJI_20260506_175714_472.webp", "imagenes/DJI_20260506_175719_678.webp", "imagenes/DJI_20260506_175720_980.webp", "imagenes/DJI_20260506_175722_677.webp", "imagenes/DJI_20260506_175724_385.webp", "imagenes/DJI_20260506_175726_304.webp", "imagenes/DJI_20260506_175729_307.webp", "imagenes/DJI_20260506_175731_704.webp", "imagenes/DJI_20260506_175732_785.webp", "imagenes/DJI_20260506_175733_939.webp", "imagenes/DJI_20260506_175737_677.webp", "imagenes/DJI_20260506_175738_935.webp", "imagenes/DJI_20260506_175740_195.webp", "imagenes/DJI_20260506_175743_107.webp", "imagenes/DJI_20260506_175747_065.webp", "imagenes/DJI_20260506_175748_432.webp", "imagenes/DJI_20260506_175749_691.webp", "imagenes/DJI_20260506_175751_486.webp", "imagenes/DJI_20260506_175753_006.webp", "imagenes/DJI_20260506_175754_936.webp", "imagenes/DJI_20260506_175756_648.webp", "imagenes/DJI_20260506_175758_001.webp", "imagenes/DJI_20260506_175759_472.webp", "imagenes/DJI_20260506_175801_253.webp", "imagenes/DJI_20260506_175803_216.webp", "imagenes/DJI_20260506_175804_779.webp", "imagenes/DJI_20260506_175806_417.webp", "imagenes/DJI_20260506_175809_399.webp", "imagenes/DJI_20260506_175811_166.webp", "imagenes/DJI_20260506_175813_643.webp", "imagenes/DJI_20260506_175815_251.webp", "imagenes/DJI_20260506_175817_273.webp", "imagenes/DJI_20260506_175820_018.webp", "imagenes/DJI_20260506_175821_657.webp", "imagenes/DJI_20260506_175826_964.webp", "imagenes/DJI_20260506_175828_466.webp", "imagenes/DJI_20260506_175830_724.webp", "imagenes/DJI_20260506_175832_200.webp", "imagenes/DJI_20260506_175835_290.webp", "imagenes/DJI_20260506_175837_760.webp", "imagenes/DJI_20260506_175839_130.webp", "imagenes/DJI_20260506_175842_281.webp", "imagenes/DJI_20260506_175844_677.webp", "imagenes/DJI_20260506_175846_957.webp", "imagenes/DJI_20260506_175850_546.webp", "imagenes/DJI_20260506_175852_324.webp", "imagenes/DJI_20260506_175855_810.webp", "imagenes/DJI_20260506_175901_164.webp", "imagenes/DJI_20260506_175940_584.webp", "imagenes/DJI_20260506_175943_941.webp", "imagenes/DJI_20260506_175945_860.webp", "imagenes/DJI_20260506_175951_186.webp", "imagenes/DJI_20260506_175953_178.webp", "imagenes/DJI_20260506_175955_250.webp", "imagenes/DJI_20260506_180001_207.webp", "imagenes/DJI_20260506_180003_304.webp", "imagenes/DJI_20260506_180005_360.webp", "imagenes/DJI_20260506_180007_943.webp", "imagenes/DJI_20260506_180009_845.webp", "imagenes/DJI_20260506_180011_079.webp", "imagenes/DJI_20260506_180015_142.webp", "imagenes/DJI_20260506_180017_051.webp", "imagenes/DJI_20260506_180019_310.webp", "imagenes/DJI_20260506_180543_386.webp", "imagenes/DJI_20260506_180544_511.webp", "imagenes/DJI_20260506_180553_375.webp", "imagenes/DJI_20260506_180609_546.webp", "imagenes/DJI_20260506_180618_276.webp", "imagenes/DJI_20260506_180622_612.webp", "imagenes/DJI_20260506_180638_271.webp", "imagenes/DJI_20260506_180643_323.webp", "imagenes/DJI_20260506_180644_901.webp", "imagenes/DJI_20260506_180646_476.webp", "imagenes/DJI_20260506_180648_858.webp", "imagenes/DJI_20260506_180650_151.webp", "imagenes/DJI_20260506_180652_353.webp", "imagenes/DJI_20260506_183629_599.webp", "imagenes/DJI_20260506_183631_425.webp", "imagenes/DJI_20260506_183632_551.webp", "imagenes/DJI_20260506_183633_792.webp", "imagenes/DJI_20260506_183638_143.webp", "imagenes/DJI_20260506_183639_749.webp", "imagenes/DJI_20260506_183641_386.webp", "imagenes/DJI_20260506_183642_944.webp", "imagenes/DJI_20260506_183644_341.webp", "imagenes/DJI_20260506_183645_889.webp", "imagenes/DJI_20260506_183650_700.webp", "imagenes/DJI_20260506_183652_248.webp", "imagenes/DJI_20260506_183653_896.webp", "imagenes/DJI_20260506_183656_999.webp", "imagenes/DJI_20260506_183701_712.webp", "imagenes/DJI_20260506_183702_908.webp", "imagenes/DJI_20260506_183704_108.webp", "imagenes/DJI_20260506_183705_446.webp", "imagenes/DJI_20260506_183706_540.webp", "imagenes/DJI_20260506_183709_437.webp", "imagenes/DJI_20260506_185407_804.webp", "imagenes/DJI_20260506_185410_761.webp", "imagenes/DJI_20260506_185428_986.webp", "imagenes/DJI_20260506_185431_158.webp", "imagenes/DJI_20260506_185434_265.webp", "imagenes/DJI_20260506_185441_316.webp", "imagenes/DJI_20260506_185552_312.webp", "imagenes/DJI_20260506_185554_983.webp", "imagenes/DJI_20260506_185556_930.webp", "imagenes/DJI_20260506_185607_434.webp", "imagenes/DJI_20260506_185608_769.webp", "imagenes/DJI_20260506_185613_942.webp", "imagenes/DJI_20260506_185629_318.webp", "imagenes/DJI_20260506_185631_129.webp", "imagenes/DJI_20260506_185634_945.webp", "imagenes/DJI_20260506_185636_280.webp", "imagenes/DJI_20260506_185638_920.webp", "imagenes/DJI_20260523_131922_771.webp", "imagenes/DJI_20260523_131934_172.webp", "imagenes/DJI_20260523_131959_445.webp", "imagenes/DJI_20260523_132010_396.webp", "imagenes/DJI_20260523_132012_762.webp", "imagenes/DJI_20260523_132039_493.webp", "imagenes/DJI_20260523_132302_939.webp", "imagenes/DJI_20260523_132417_594.webp", "imagenes/DJI_20260523_132425_140.webp", "imagenes/DJI_20260523_132430_766.webp", "imagenes/DJI_20260523_132528_995.webp", "imagenes/DJI_20260523_132532_130.webp", "imagenes/DJI_20260523_132550_865.webp", "imagenes/DJI_20260523_132552_704.webp", "imagenes/DJI_20260523_132744_683.webp", "imagenes/DJI_20260523_132801_935.webp", "imagenes/DJI_20260523_132820_458.webp", "imagenes/DJI_20260523_132827_570.webp", "imagenes/DJI_20260523_132841_429.webp", "imagenes/DJI_20260523_132857_013.webp", "imagenes/DJI_20260523_132858_901.webp", "imagenes/DJI_20260523_133037_094.webp", "imagenes/DJI_20260523_133047_459.webp", "imagenes/DJI_20260523_133057_361.webp", "imagenes/DJI_20260523_133103_506.webp", "imagenes/DJI_20260523_133602_555.webp", "imagenes/DJI_20260523_133604_862.webp", "imagenes/DJI_20260523_133624_561.webp", "imagenes/DJI_20260523_133635_736.webp", "imagenes/DJI_20260523_133639_140.webp", "imagenes/DJI_20260523_133641_628.webp", "imagenes/DJI_20260523_133745_878.webp", "imagenes/DJI_20260523_133807_885.webp", "imagenes/DJI_20260523_133811_560.webp", "imagenes/DJI_20260523_133831_166.webp", "imagenes/DJI_20260523_133900_852.webp", "imagenes/DJI_20260523_133904_586.webp", "imagenes/DJI_20260523_133926_562.webp", "imagenes/DJI_20260523_133956_114.webp", "imagenes/DJI_20260523_134000_822.webp", "imagenes/DJI_20260523_134019_287.webp", "imagenes/DJI_20260523_134043_335.webp", "imagenes/DJI_20260523_134146_711.webp", "imagenes/DJI_20260523_134219_830.webp", "imagenes/DJI_20260523_134223_204.webp", "imagenes/DJI_20260523_134243_994.webp", "imagenes/DJI_20260523_134253_131.webp", "imagenes/DJI_20260523_134300_962.webp", "imagenes/DJI_20260523_134349_323.webp", "imagenes/DJI_20260506172654_0051_D.webp", "imagenes/DJI_20260506172706_0052_D.webp", "imagenes/DJI_20260506172711_0053_D.webp", "imagenes/DJI_20260506172716_0054_D.webp", "imagenes/DJI_20260506172721_0055_D.webp", "imagenes/DJI_20260506172728_0056_D.webp", "imagenes/DJI_20260506172733_0057_D.webp", "imagenes/DJI_20260506172736_0058_D.webp", "imagenes/DJI_20260506172745_0059_D.webp", "imagenes/DJI_20260506172751_0060_D.webp", "imagenes/DJI_20260506172758_0061_D.webp", "imagenes/DSC_0001.webp", "imagenes/DSC_0002.webp", "imagenes/DSC_0003.webp", "imagenes/DSC_0004.webp", "imagenes/DSC_0005.webp", "imagenes/DSC_0006.webp", "imagenes/DSC_0007.webp", "imagenes/DSC_0008.webp", "imagenes/DSC_0009.webp", "imagenes/DSC_0010.webp", "imagenes/DSC_0011.webp", "imagenes/DSC_0012.webp", "imagenes/DSC_0013.webp", "imagenes/DSC_0014.webp", "imagenes/DSC_0015.webp", "imagenes/DSC_0016.webp", "imagenes/DSC_0017.webp", "imagenes/DSC_0018.webp", "imagenes/DSC_0019.webp", "imagenes/DSC_0020.webp", "imagenes/DSC_0021.webp", "imagenes/DSC_0022.webp", "imagenes/DSC_0023.webp", "imagenes/DSC_0024.webp", "imagenes/DSC_0025.webp", "imagenes/DSC_0026.webp", "imagenes/DSC_0027.webp", "imagenes/DSC_0028.webp", "imagenes/DSC_0029.webp", "imagenes/DSC_0030.webp", "imagenes/DSC_0031.webp", "imagenes/DSC_0032.webp", "imagenes/DSC_0033.webp", "imagenes/DSC_0034.webp", "imagenes/DSC_0035.webp", "imagenes/DSC_0036.webp", "imagenes/DSC_0037.webp", "imagenes/DSC_0038.webp", "imagenes/DSC_0039.webp", "imagenes/DSC_0040.webp", "imagenes/DSC_0041.webp", "imagenes/DSC_0042.webp", "imagenes/DSC_0043.webp", "imagenes/DSC_0044.webp", "imagenes/DSC_0045.webp", "imagenes/DSC_0046.webp", "imagenes/DSC_0047.webp", "imagenes/DSC_0048.webp", "imagenes/DSC_0049.webp", "imagenes/DSC_0050.webp", "imagenes/DSC_0051.webp", "imagenes/DSC_0052.webp", "imagenes/DSC_0053.webp", "imagenes/DSC_0054.webp", "imagenes/DSC_0055.webp", "imagenes/DSC_0056.webp", "imagenes/DSC_0057.webp", "imagenes/DSC_0058.webp", "imagenes/DSC_0059.webp", "imagenes/DSC_0060.webp", "imagenes/DSC_0061.webp", "imagenes/DSC_0062.webp", "imagenes/DSC_0063.webp", "imagenes/DSC_0064.webp", "imagenes/DSC_0065.webp", "imagenes/DSC_0066.webp", "imagenes/DSC_0067.webp", "imagenes/DSC_0068.webp", "imagenes/DSC_0069.webp", "imagenes/DSC_0070.webp", "imagenes/DSC_0071.webp", "imagenes/DSC_0072.webp", "imagenes/DSC_0073.webp", "imagenes/DSC_0074.webp", "imagenes/DSC_0075.webp", "imagenes/DSC_0076.webp", "imagenes/DSC_0077.webp", "imagenes/DSC_0078.webp", "imagenes/DSC_0079.webp", "imagenes/DSC_0080.webp", "imagenes/DSC_0081.webp", "imagenes/DSC_0082.webp", "imagenes/DSC_0083.webp", "imagenes/DSC_0084.webp", "imagenes/DSC_0085.webp", "imagenes/DSC_0086.webp", "imagenes/DSC_0087.webp", "imagenes/DSC_0088.webp", "imagenes/DSC_0089.webp", "imagenes/DSC_0090.webp", "imagenes/DSC_0091.webp", "imagenes/DSC_0092.webp", "imagenes/DSC_0093.webp", "imagenes/DSC_0094.webp", "imagenes/DSC_0095.webp", "imagenes/DSC_0096.webp", "imagenes/DSC_0097.webp", "imagenes/DSC_0098.webp", "imagenes/DSC_0099.webp", "imagenes/DSC_0100.webp", "imagenes/DSC_0101.webp", "imagenes/DSC_0102.webp", "imagenes/DSC_0103.webp", "imagenes/DSC_0104.webp", "imagenes/DSC_0105.webp", "imagenes/DSC_0106.webp", "imagenes/DSC_0107.webp", "imagenes/DSC_0108.webp", "imagenes/DSC_0109.webp", "imagenes/DSC_0110.webp", "imagenes/DSC_0111.webp", "imagenes/DSC_0112.webp", "imagenes/DSC_0113.webp", "imagenes/DSC_0114.webp", "imagenes/DSC_0115.webp", "imagenes/DSC_0116.webp", "imagenes/DSC_0117.webp", "imagenes/DSC_0118.webp", "imagenes/DSC_0119.webp", "imagenes/DSC_0120.webp", "imagenes/DSC_0121.webp", "imagenes/DSC_0122.webp", "imagenes/DSC_0123.webp", "imagenes/DSC_0124.webp", "imagenes/DSC_0125.webp", "imagenes/DSC_0126.webp", "imagenes/DSC_0127.webp", "imagenes/DSC_0128.webp", "imagenes/DSC_0129.webp", "imagenes/DSC_0130.webp", "imagenes/DSC_0131.webp", "imagenes/DSC_0132.webp", "imagenes/DSC_0133.webp", "imagenes/DSC_0134.webp", "imagenes/DSC_0135.webp", "imagenes/DSC_0136.webp", "imagenes/DSC_0137.webp", "imagenes/DSC_0138.webp", "imagenes/DSC_0139.webp", "imagenes/DSC_0140.webp", "imagenes/DSC_0141.webp", "imagenes/DSC_0142.webp", "imagenes/DSC_0143.webp", "imagenes/DSC_0144.webp", "imagenes/DSC_0145.webp", "imagenes/DSC_0146.webp", "imagenes/DSC_0147.webp", "imagenes/DSC_0148.webp", "imagenes/DSC_0149.webp", "imagenes/DSC_0150.webp", "imagenes/DSC_0151.webp", "imagenes/DSC_0152.webp", "imagenes/DSC_0153.webp", "imagenes/DSC_0154.webp", "imagenes/DSC_0155.webp", "imagenes/DSC_0156.webp", "imagenes/DSC_0157.webp", "imagenes/DSC_0158.webp", "imagenes/DSC_0159.webp", "imagenes/DSC_0160.webp", "imagenes/DSC_0161.webp", "imagenes/DSC_0162.webp", "imagenes/DSC_0163.webp", "imagenes/DSC_0164.webp", "imagenes/DSC_0165.webp", "imagenes/DSC_0166.webp", "imagenes/DSC_0167.webp", "imagenes/DSC_0168.webp", "imagenes/DSC_0169.webp", "imagenes/DSC_0170.webp", "imagenes/DSC_0171.webp", "imagenes/DSC_0172.webp", "imagenes/DSC_0173.webp", "imagenes/DSC_0174.webp", "imagenes/DSC_0175.webp", "imagenes/DSC_0176.webp", "imagenes/DSC_0177.webp", "imagenes/DSC_0178.webp", "imagenes/DSC_0179.webp", "imagenes/DSC_0180.webp", "imagenes/DSC_0181.webp", "imagenes/DSC_0182.webp", "imagenes/DSC_0183.webp", "imagenes/DSC_0184.webp", "imagenes/DSC_0185.webp", "imagenes/DSC_0186.webp", "imagenes/DSC_0187.webp", "imagenes/DSC_0188.webp", "imagenes/DSC_0189.webp", "imagenes/DSC_0190.webp", "imagenes/DSC_0191.webp", "imagenes/DSC_0192.webp", "imagenes/DSC_0193.webp", "imagenes/DSC_0194.webp", "imagenes/DSC_0195.webp", "imagenes/DSC_0196.webp", "imagenes/DSC_0197.webp", "imagenes/DSC_0198.webp", "imagenes/DSC_0199.webp", "imagenes/DSC_0200.webp", "imagenes/DSC_0201.webp", "imagenes/DSC_0202.webp", "imagenes/DSC_0203.webp", "imagenes/DSC_0204.webp", "imagenes/DSC_0205.webp", "imagenes/DSC_0206.webp", "imagenes/DSC_0207.webp", "imagenes/DSC_0208.webp", "imagenes/DSC_0209.webp", "imagenes/DSC_0210.webp", "imagenes/DSC_0211.webp", "imagenes/DSC_0212.webp", "imagenes/DSC_0213.webp", "imagenes/DSC_0214.webp", "imagenes/DSC_0215.webp", "imagenes/DSC_0216.webp", "imagenes/DSC_0217.webp", "imagenes/DSC_0218.webp", "imagenes/DSC_0219.webp", "imagenes/DSC_0220.webp", "imagenes/DSC_0221.webp", "imagenes/DSC_0222.webp", "imagenes/DSC_0223.webp", "imagenes/DSC_0224.webp", "imagenes/DSC_0225.webp", "imagenes/DSC_0226.webp", "imagenes/DSC_0227.webp", "imagenes/DSC_0228.webp", "imagenes/DSC_0229.webp", "imagenes/DSC_0230.webp", "imagenes/DSC_0231.webp", "imagenes/DSC_0232.webp", "imagenes/DSC_0233.webp", "imagenes/DSC_0234.webp", "imagenes/DSC_0235.webp", "imagenes/DSC_0236.webp", "imagenes/DSC_0237.webp", "imagenes/DSC_0238.webp", "imagenes/DSC_0239.webp", "imagenes/DSC_0240.webp", "imagenes/DSC_0241.webp", "imagenes/DSC_0242.webp", "imagenes/DSC_0243.webp", "imagenes/DSC_0244.webp", "imagenes/DSC_0245.webp", "imagenes/DSC_0246.webp", "imagenes/DSC_0247.webp", "imagenes/DSC_0248.webp", "imagenes/DSC_0249.webp", "imagenes/DSC_0250.webp", "imagenes/DSC_0251.webp", "imagenes/DSC_0252.webp", "imagenes/DSC_0253.webp", "imagenes/DSC_0254.webp", "imagenes/DSC_0255.webp", "imagenes/DSC_0256.webp", "imagenes/DSC_0257.webp", "imagenes/DSC_0258.webp", "imagenes/DSC_0259.webp", "imagenes/DSC_0260.webp", "imagenes/DSC_0261.webp", "imagenes/DSC_0262.webp", "imagenes/DSC_0263.webp", "imagenes/DSC_0264.webp", "imagenes/DSC_0265.webp", "imagenes/DSC_0266.webp", "imagenes/DSC_0267.webp", "imagenes/DSC_0268.webp", "imagenes/DSC_0269.webp", "imagenes/DSC_0270.webp", "imagenes/DSC_0271.webp", "imagenes/DSC_0272.webp", "imagenes/DSC_0273.webp", "imagenes/DSC_0274.webp", "imagenes/DSC_0275.webp", "imagenes/DSC_0276.webp", "imagenes/DSC_0277.webp", "imagenes/DSC_0278.webp", "imagenes/DSC_0279.webp", "imagenes/DSC_0280.webp", "imagenes/DSC_0281.webp", "imagenes/DSC_0282.webp", "imagenes/DSC_0283.webp", "imagenes/DSC_0284.webp", "imagenes/DSC_0285.webp", "imagenes/DSC_0286.webp", "imagenes/DSC_0287.webp", "imagenes/DSC_0288.webp", "imagenes/DSC_0289.webp", "imagenes/DSC_0290.webp", "imagenes/DSC_0291.webp", "imagenes/DSC_0292.webp", "imagenes/DSC_0293.webp", "imagenes/DSC_0294.webp", "imagenes/DSC_0295.webp", "imagenes/DSC_0296.webp", "imagenes/DSC_0297.webp", "imagenes/DSC_0298.webp", "imagenes/DSC_0299.webp", "imagenes/DSC_0300.webp", "imagenes/DSC_0301.webp", "imagenes/DSC_0302.webp", "imagenes/DSC_0303.webp", "imagenes/DSC_0304.webp", "imagenes/DSC_0305.webp", "imagenes/DSC_0306.webp", "imagenes/DSC_0307.webp", "imagenes/DSC_0308.webp", "imagenes/DSC_0309.webp", "imagenes/DSC_0310.webp", "imagenes/DSC_0311.webp", "imagenes/DSC_0312.webp", "imagenes/DSC_0313.webp", "imagenes/DSC_0314.webp", "imagenes/DSC_0315.webp", "imagenes/DSC_0316.webp", "imagenes/DSC_0317.webp", "imagenes/DSC_0318.webp", "imagenes/DSC_0319.webp", "imagenes/DSC_0320.webp", "imagenes/DSC_0321.webp", "imagenes/DSC_0322.webp", "imagenes/DSC_0323.webp", "imagenes/DSC_0324.webp", "imagenes/DSC_0325.webp", "imagenes/DSC_0326.webp", "imagenes/DSC_0327.webp", "imagenes/DSC_0328.webp", "imagenes/DSC_0329.webp", "imagenes/DSC_0330.webp", "imagenes/DSC_0331.webp", "imagenes/DSC_0332.webp", "imagenes/DSC_0333.webp", "imagenes/DSC_0334.webp", "imagenes/DSC_0335.webp", "imagenes/DSC_0336.webp", "imagenes/DSC_0337.webp", "imagenes/DSC_0338.webp", "imagenes/DSC_0339.webp", "imagenes/DSC_0340.webp", "imagenes/DSC_0341.webp", "imagenes/DSC_0342.webp", "imagenes/DSC_0343.webp", "imagenes/DSC_0344.webp", "imagenes/DSC_0345.webp", "imagenes/DSC_0346.webp", "imagenes/DSC_0347.webp", "imagenes/DSC_0348.webp", "imagenes/DSC_0349.webp", "imagenes/DSC_0350.webp", "imagenes/DSC_0351.webp", "imagenes/DSC_0352.webp", "imagenes/DSC_0353.webp", "imagenes/DSC_0354.webp", "imagenes/DSC_0355.webp", "imagenes/DSC_0356.webp", "imagenes/DSC_0357.webp", "imagenes/DSC_0358.webp", "imagenes/DSC_0359.webp", "imagenes/DSC_0360.webp", "imagenes/DSC_0361.webp", "imagenes/DSC_0362.webp", "imagenes/DSC_0363.webp", "imagenes/DSC_0364.webp", "imagenes/DSC_0365.webp", "imagenes/DSC_0366.webp", "imagenes/DSC_0368.webp", "imagenes/DSC_0369.webp", "imagenes/DSC_0370.webp", "imagenes/DSC_0371.webp", "imagenes/DSC_0372.webp", "imagenes/DSC_0373.webp", "imagenes/DSC_0374.webp", "imagenes/DSC_0375.webp", "imagenes/DSC_0376.webp", "imagenes/DSC_0377.webp", "imagenes/DSC_0378.webp", "imagenes/DSC_0379.webp", "imagenes/DSC_0380.webp", "imagenes/DSC_0381.webp", "imagenes/DSC_0382.webp", "imagenes/DSC_0383.webp", "imagenes/DSC_0384.webp", "imagenes/DSC_0385.webp", "imagenes/DSC_0386.webp", "imagenes/DSC_0387.webp", "imagenes/DSC_0388.webp", "imagenes/DSC_0389.webp", "imagenes/DSC_0390.webp", "imagenes/DSC_0391.webp", "imagenes/DSC_0392.webp", "imagenes/DSC_0393.webp", "imagenes/DSC_0394.webp", "imagenes/DSC_0395.webp", "imagenes/DSC_0396.webp", "imagenes/DSC_0397.webp", "imagenes/DSC_0398.webp", "imagenes/DSC_0399.webp", "imagenes/DSC_0400.webp", "imagenes/DSC_0401.webp", "imagenes/DSC_0402.webp", "imagenes/DSC_0403.webp", "imagenes/DSC_0404.webp", "imagenes/DSC_0405.webp", "imagenes/DSC_0406.webp", "imagenes/DSC_0407.webp", "imagenes/DSC_0408.webp", "imagenes/DSC_0409.webp", "imagenes/DSC_0410.webp", "imagenes/DSC_0411.webp", "imagenes/DSC_0412.webp", "imagenes/DSC_0413.webp", "imagenes/DSC_0414.webp", "imagenes/DSC_0415.webp", "imagenes/DSC_0416.webp", "imagenes/DSC_0417.webp", "imagenes/DSC_0418.webp", "imagenes/DSC_0419.webp", "imagenes/DSC_0420.webp", "imagenes/DSC_0421.webp", "imagenes/DSC_0422.webp", "imagenes/DSC_0423.webp", "imagenes/DSC_0424.webp", "imagenes/DSC_0425.webp", "imagenes/DSC_0426.webp", "imagenes/DSC_0427.webp", "imagenes/DSC_0428.webp", "imagenes/DSC_0429.webp", "imagenes/DSC_0430.webp", "imagenes/DSC_0431.webp", "imagenes/DSC_0432.webp", "imagenes/DSC_0433.webp", "imagenes/DSC_0434.webp", "imagenes/DSC_0435.webp", "imagenes/DSC_0436.webp", "imagenes/DSC_0437.webp", "imagenes/DSC_0438.webp", "imagenes/DSC_0439.webp", "imagenes/DSC_0440.webp", "imagenes/DSC_0441.webp", "imagenes/DSC_0442.webp", "imagenes/DSC_0443.webp", "imagenes/DSC_0444.webp", "imagenes/DSC_0445.webp", "imagenes/DSC_0446.webp", "imagenes/DSC_0447.webp", "imagenes/DSC_0448.webp", "imagenes/DSC_0449.webp", "imagenes/DSC_0450.webp", "imagenes/DSC_0451.webp", "imagenes/DSC_0452.webp", "imagenes/DSC_0453.webp", "imagenes/DSC_0454.webp", "imagenes/DSC_0455.webp", "imagenes/DSC_0456.webp", "imagenes/DSC_0457.webp", "imagenes/DSC_0458.webp", "imagenes/DSC_0459.webp", "imagenes/DSC_0460.webp", "imagenes/DSC_0461.webp", "imagenes/DSC_0462.webp", "imagenes/DSC_0463.webp", "imagenes/DSC_0464.webp", "imagenes/DSC_0465.webp", "imagenes/DSC_0466.webp", "imagenes/DSC_0467.webp", "imagenes/DSC_0468.webp", "imagenes/DSC_0469.webp", "imagenes/DSC_0470.webp", "imagenes/DSC_0471.webp", "imagenes/DSC_0472.webp", "imagenes/DSC_0473.webp", "imagenes/DSC_0474.webp", "imagenes/DSC_0475.webp", "imagenes/DSC_0476.webp", "imagenes/DSC_0477.webp", "imagenes/DSC_0478.webp", "imagenes/DSC_0479.webp", "imagenes/DSC_0480.webp", "imagenes/DSC_0481.webp", "imagenes/DSC_0482.webp", "imagenes/DSC_0483.webp", "imagenes/DSC_0484.webp", "imagenes/DSC_0485.webp", "imagenes/DSC_0486.webp", "imagenes/DSC_0487.webp", "imagenes/DSC_0488.webp", "imagenes/DSC_0489.webp", "imagenes/DSC_0490.webp", "imagenes/DSC_0491.webp", "imagenes/DSC_0492.webp", "imagenes/DSC_0493.webp", "imagenes/DSC_0494.webp", "imagenes/DSC_0495.webp", "imagenes/DSC_0496.webp", "imagenes/DSC_0497.webp", "imagenes/DSC_0498.webp", "imagenes/DSC_0499.webp", "imagenes/DSC_0500.webp", "imagenes/DSC_0501.webp", "imagenes/DSC_0502.webp", "imagenes/DSC_0503.webp", "imagenes/DSC_0504.webp", "imagenes/DSC_0505.webp", "imagenes/DSC_0506.webp", "imagenes/DSC_0507.webp", "imagenes/DSC_0508.webp", "imagenes/DSC_0509.webp", "imagenes/DSC_0510.webp", "imagenes/DSC_0511.webp", "imagenes/DSC_0512.webp", "imagenes/DSC_0513.webp", "imagenes/DSC_0514.webp", "imagenes/DSC_0515.webp", "imagenes/DSC_0516.webp", "imagenes/DSC_0517.webp", "imagenes/DSC_0518.webp", "imagenes/DSC_0519.webp", "imagenes/DSC_0520.webp", "imagenes/DSC_0521.webp", "imagenes/DSC_0522.webp", "imagenes/DSC_0523.webp", "imagenes/DSC_0524.webp", "imagenes/DSC_0525.webp", "imagenes/DSC_0526.webp", "imagenes/DSC_0527.webp", "imagenes/DSC_0528.webp", "imagenes/DSC_0529.webp", "imagenes/DSC_0530.webp", "imagenes/DSC_0531.webp", "imagenes/DSC_0532.webp", "imagenes/DSC_0533.webp", "imagenes/DSC_0534.webp", "imagenes/DSC_0535.webp", "imagenes/DSC_0536.webp", "imagenes/DSC_0537.webp", "imagenes/DSC_0538.webp", "imagenes/DSC_0539.webp", "imagenes/DSC_0540.webp", "imagenes/DSC_0541.webp", "imagenes/DSC_0542.webp", "imagenes/DSC_0543.webp", "imagenes/DSC_0544.webp", "imagenes/DSC_0545.webp", "imagenes/DSC_0546.webp", "imagenes/DSC_0547.webp", "imagenes/DSC_0548.webp", "imagenes/DSC_0549.webp", "imagenes/DSC_0550.webp", "imagenes/DSC_0551.webp", "imagenes/DSC_0552.webp", "imagenes/DSC_8513.webp", "imagenes/DSC_8514.webp", "imagenes/DSC_8515.webp", "imagenes/DSC_8516.webp", "imagenes/DSC_8517.webp", "imagenes/DSC_8518.webp", "imagenes/DSC_8519.webp", "imagenes/DSC_8520.webp", "imagenes/DSC_8521.webp", "imagenes/DSC_8522.webp", "imagenes/DSC_8523.webp", "imagenes/DSC_8524.webp", "imagenes/DSC_8525.webp", "imagenes/DSC_8526.webp", "imagenes/DSC_8527.webp", "imagenes/DSC_8528.webp", "imagenes/DSC_8529.webp", "imagenes/DSC_8530.webp", "imagenes/DSC_8531.webp", "imagenes/DSC_8532.webp", "imagenes/DSC_8533.webp", "imagenes/DSC_8534.webp", "imagenes/DSC_8535.webp", "imagenes/DSC_8536.webp", "imagenes/DSC_8537.webp", "imagenes/DSC_8538.webp", "imagenes/DSC_8539.webp", "imagenes/DSC_8540.webp", "imagenes/DSC_8541.webp", "imagenes/DSC_8542.webp", "imagenes/DSC_8543.webp", "imagenes/DSC_8544.webp", "imagenes/DSC_8545.webp", "imagenes/DSC_8546.webp", "imagenes/DSC_8547.webp", "imagenes/DSC_8548.webp", "imagenes/DSC_8549.webp", "imagenes/DSC_8550.webp", "imagenes/DSC_8551.webp", "imagenes/DSC_8552.webp", "imagenes/DSC_8553.webp", "imagenes/DSC_8554.webp", "imagenes/DSC_8555.webp", "imagenes/DSC_8556.webp", "imagenes/DSC_8557.webp", "imagenes/DSC_8558.webp", "imagenes/DSC_8559.webp", "imagenes/DSC_8560.webp", "imagenes/DSC_8561.webp", "imagenes/DSC_8562.webp", "imagenes/DSC_8563.webp", "imagenes/DSC_8564.webp", "imagenes/DSC_8565.webp", "imagenes/DSC_8566.webp", "imagenes/DSC_8567.webp", "imagenes/DSC_8568.webp", "imagenes/DSC_8569.webp", "imagenes/DSC_8570.webp", "imagenes/DSC_8571.webp", "imagenes/DSC_8572.webp", "imagenes/DSC_8573.webp", "imagenes/DSC_8574.webp", "imagenes/DSC_8575.webp", "imagenes/DSC_8576.webp", "imagenes/DSC_8577.webp", "imagenes/DSC_8578.webp", "imagenes/DSC_8579.webp", "imagenes/DSC_8580.webp", "imagenes/DSC_8581.webp", "imagenes/DSC_8582.webp", "imagenes/DSC_8583.webp", "imagenes/DSC_8584.webp", "imagenes/DSC_8585.webp", "imagenes/DSC_8586.webp", "imagenes/DSC_8587.webp", "imagenes/DSC_8589.webp", "imagenes/DSC_8590.webp", "imagenes/DSC_8591.webp", "imagenes/DSC_8592.webp", "imagenes/DSC_8593.webp", "imagenes/DSC_8594.webp", "imagenes/DSC_8595.webp", "imagenes/DSC_8596.webp", "imagenes/DSC_8597.webp", "imagenes/DSC_8598.webp", "imagenes/DSC_8599.webp", "imagenes/DSC_8600.webp", "imagenes/DSC_8601.webp", "imagenes/DSC_8602.webp", "imagenes/DSC_8603.webp", "imagenes/DSC_8604.webp", "imagenes/DSC_8605.webp", "imagenes/DSC_8606.webp", "imagenes/DSC_8607.webp", "imagenes/DSC_8608.webp", "imagenes/DSC_8609.webp", "imagenes/DSC_8610.webp", "imagenes/DSC_8611.webp", "imagenes/DSC_8612.webp", "imagenes/DSC_8613.webp", "imagenes/DSC_8614.webp", "imagenes/DSC_8615.webp", "imagenes/DSC_8616.webp", "imagenes/DSC_8617.webp", "imagenes/DSC_8618.webp", "imagenes/DSC_9761.webp", "imagenes/DSC_9762.webp", "imagenes/DSC_9764.webp", "imagenes/DSC_9765.webp", "imagenes/DSC_9766.webp", "imagenes/DSC_9767.webp", "imagenes/DSC_9768.webp", "imagenes/DSC_9769.webp", "imagenes/DSC_9770.webp", "imagenes/DSC_9771.webp", "imagenes/DSC_9772.webp", "imagenes/DSC_9773.webp", "imagenes/DSC_9774.webp", "imagenes/DSC_9775.webp", "imagenes/DSC_9776.webp", "imagenes/DSC_9777.webp", "imagenes/DSC_9778.webp", "imagenes/DSC_9779.webp", "imagenes/DSC_9780.webp", "imagenes/DSC_9781.webp", "imagenes/DSC_9782.webp", "imagenes/DSC_9783.webp", "imagenes/DSC_9784.webp", "imagenes/DSC_9785.webp", "imagenes/DSC_9786.webp", "imagenes/DSC_9787.webp", "imagenes/DSC_9788.webp", "imagenes/DSC_9789.webp", "imagenes/DSC_9790.webp", "imagenes/DSC_9791.webp", "imagenes/DSC_9792.webp", "imagenes/DSC_9793.webp", "imagenes/DSC_9794.webp", "imagenes/DSC_9795.webp", "imagenes/DSC_9797.webp", "imagenes/DSC_9799.webp", "imagenes/DSC_9800.webp", "imagenes/DSC_9801.webp", "imagenes/DSC_9802.webp", "imagenes/DSC_9803.webp", "imagenes/DSC_9804.webp", "imagenes/DSC_9805.webp", "imagenes/DSC_9806.webp", "imagenes/DSC_9807.webp", "imagenes/DSC_9808.webp", "imagenes/DSC_9809.webp", "imagenes/DSC_9811.webp", "imagenes/DSC_9812.webp", "imagenes/DSC_9813.webp", "imagenes/DSC_9814.webp", "imagenes/DSC_9815.webp", "imagenes/DSC_9816.webp", "imagenes/DSC_9817.webp", "imagenes/DSC_9818.webp", "imagenes/DSC_9819.webp", "imagenes/DSC_9820.webp", "imagenes/DSC_9821.webp", "imagenes/DSC_9822.webp", "imagenes/DSC_9823.webp", "imagenes/DSC_9824.webp", "imagenes/DSC_9826.webp", "imagenes/DSC_9827.webp", "imagenes/DSC_9828.webp", "imagenes/DSC_9829.webp", "imagenes/DSC_9830.webp", "imagenes/DSC_9831.webp", "imagenes/DSC_9832.webp", "imagenes/DSC_9833.webp", "imagenes/DSC_9834.webp", "imagenes/DSC_9835.webp", "imagenes/DSC_9836.webp", "imagenes/DSC_9837.webp", "imagenes/DSC_9838.webp", "imagenes/DSC_9839.webp", "imagenes/DSC_9840.webp", "imagenes/DSC_9841.webp", "imagenes/DSC_9842.webp", "imagenes/DSC_9843.webp", "imagenes/DSC_9844.webp", "imagenes/DSC_9845.webp", "imagenes/DSC_9846.webp", "imagenes/DSC_9847.webp", "imagenes/DSC_9848.webp", "imagenes/DSC_9849.webp", "imagenes/DSC_9850.webp", "imagenes/DSC_9851.webp", "imagenes/DSC_9852.webp", "imagenes/DSC_9853.webp", "imagenes/DSC_9854.webp", "imagenes/DSC_9855.webp", "imagenes/DSC_9856.webp", "imagenes/DSC_9857.webp", "imagenes/DSC_9858.webp", "imagenes/DSC_9859.webp", "imagenes/DSC_9860.webp", "imagenes/DSC_9861.webp", "imagenes/DSC_9862.webp", "imagenes/DSC_9863.webp", "imagenes/DSC_9864.webp", "imagenes/DSC_9865.webp", "imagenes/DSC_9866.webp", "imagenes/DSC_9867.webp", "imagenes/DSC_9868.webp", "imagenes/DSC_9869.webp", "imagenes/DSC_9870.webp", "imagenes/DSC_9871.webp", "imagenes/DSC_9872.webp", "imagenes/DSC_9873.webp", "imagenes/DSC_9874.webp", "imagenes/DSC_9875.webp", "imagenes/DSC_9876.webp", "imagenes/DSC_9877.webp", "imagenes/DSC_9878.webp", "imagenes/DSC_9879.webp", "imagenes/DSC_9880.webp", "imagenes/DSC_9881.webp", "imagenes/DSC_9882.webp", "imagenes/DSC_9883.webp", "imagenes/DSC_9884.webp", "imagenes/DSC_9885.webp", "imagenes/DSC_9886.webp", "imagenes/DSC_9887.webp", "imagenes/DSC_9888.webp", "imagenes/DSC_9889.webp", "imagenes/DSC_9890.webp", "imagenes/DSC_9891.webp", "imagenes/DSC_9892.webp", "imagenes/DSC_9893.webp", "imagenes/DSC_9894.webp", "imagenes/DSC_9895.webp", "imagenes/DSC_9896.webp", "imagenes/DSC_9897.webp", "imagenes/DSC_9898.webp", "imagenes/DSC_9899.webp", "imagenes/DSC_9900.webp", "imagenes/DSC_9901.webp", "imagenes/DSC_9902.webp", "imagenes/DSC_9903.webp", "imagenes/DSC_9904.webp", "imagenes/DSC_9905.webp", "imagenes/DSC_9906.webp", "imagenes/DSC_9907.webp", "imagenes/DSC_9908.webp", "imagenes/DSC_9909.webp", "imagenes/DSC_9910.webp", "imagenes/DSC_9911.webp", "imagenes/DSC_9912.webp", "imagenes/DSC_9913.webp", "imagenes/DSC_9914.webp", "imagenes/DSC_9915.webp", "imagenes/DSC_9916.webp", "imagenes/DSC_9917.webp", "imagenes/DSC_9918.webp", "imagenes/DSC_9919.webp", "imagenes/DSC_9920.webp", "imagenes/DSC_9921.webp", "imagenes/DSC_9922.webp", "imagenes/DSC_9923.webp", "imagenes/DSC_9924.webp", "imagenes/DSC_9925.webp", "imagenes/DSC_9926.webp", "imagenes/DSC_9927.webp", "imagenes/DSC_9928.webp", "imagenes/DSC_9929.webp", "imagenes/DSC_9930.webp", "imagenes/DSC_9931.webp", "imagenes/DSC_9932.webp", "imagenes/DSC_9933.webp", "imagenes/DSC_9934.webp", "imagenes/DSC_9935.webp", "imagenes/DSC_9936.webp", "imagenes/DSC_9937.webp", "imagenes/DSC_9938.webp", "imagenes/DSC_9939.webp", "imagenes/DSC_9940.webp", "imagenes/DSC_9941.webp", "imagenes/DSC_9942.webp", "imagenes/DSC_9943.webp", "imagenes/DSC_9944.webp", "imagenes/DSC_9945.webp", "imagenes/DSC_9946.webp", "imagenes/DSC_9947.webp", "imagenes/DSC_9948.webp", "imagenes/DSC_9949.webp", "imagenes/DSC_9950.webp", "imagenes/DSC_9951.webp", "imagenes/DSC_9952.webp", "imagenes/DSC_9953.webp", "imagenes/DSC_9954.webp", "imagenes/DSC_9955.webp", "imagenes/DSC_9956.webp", "imagenes/DSC_9957.webp", "imagenes/DSC_9958.webp", "imagenes/DSC_9959.webp", "imagenes/DSC_9960.webp", "imagenes/DSC_9961.webp", "imagenes/DSC_9962.webp", "imagenes/DSC_9963.webp", "imagenes/DSC_9964.webp", "imagenes/DSC_9965.webp", "imagenes/DSC_9966.webp", "imagenes/DSC_9967.webp", "imagenes/DSC_9968.webp", "imagenes/DSC_9969.webp", "imagenes/DSC_9970.webp", "imagenes/DSC_9971.webp", "imagenes/DSC_9972.webp", "imagenes/DSC_9973.webp", "imagenes/DSC_9974.webp", "imagenes/DSC_9975.webp", "imagenes/DSC_9976.webp", "imagenes/DSC_9977.webp", "imagenes/DSC_9978.webp", "imagenes/DSC_9979.webp", "imagenes/DSC_9980.webp", "imagenes/DSC_9981.webp", "imagenes/DSC_9982.webp", "imagenes/DSC_9983.webp", "imagenes/DSC_9984.webp", "imagenes/DSC_9985.webp", "imagenes/DSC_9986.webp", "imagenes/DSC_9987.webp", "imagenes/DSC_9988.webp", "imagenes/DSC_9989.webp", "imagenes/DSC_9990.webp", "imagenes/DSC_9991.webp", "imagenes/DSC_9992.webp", "imagenes/DSC_9993.webp", "imagenes/DSC_9994.webp", "imagenes/DSC_9995.webp", "imagenes/DSC_9996.webp", "imagenes/DSC_9997.webp", "imagenes/DSC_9998.webp", "imagenes/DSC_9999.webp"];
// Thumbnail helper: usa thumb/ en grid para ahorrar RAM en moviles
function getThumbPath(fullPath) {
    return fullPath.replace('imagenes/', 'imagenes/thumb/');
}

const STORAGE_KEY = 'xv_kimberli_perez_photo_selections';
const LIMITES = {
    ampliacion: null,
    impresion: null,
    invitacion: null
};
let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function normalizeSelection(selection) {
    return {
        ampliacion: !!(selection && selection.ampliacion),
        impresion: !!(selection && selection.impresion),
        invitacion: !!(selection && selection.invitacion),
        descartada: !!(selection && selection.descartada)
    };
}

function hasAnySelection(selection) {
    const normalized = normalizeSelection(selection);
    return normalized.ampliacion || normalized.impresion || normalized.invitacion || normalized.descartada;
}

function selectionsAreEqual(a, b) {
    const left = normalizeSelection(a);
    const right = normalizeSelection(b);
    return left.ampliacion === right.ampliacion
        && left.impresion === right.impresion
        && left.invitacion === right.invitacion
        && left.descartada === right.descartada;
}

function saveSelections(options) {
    const shouldSync = !options || options.sync !== false;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
    } catch (error) {
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
    if (shouldSync && typeof sbUpsertSelections === 'function') {
        sbUpsertSelections().catch(function(e) { console.warn('[Supabase] Sync:', e.message); });
    }
}

function clearAllSelections() {
    if (confirm('¿Estás seguro de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        try { localStorage.setItem(STORAGE_KEY, '{}'); } catch(e) {}
        if (typeof sbDeleteAll === 'function') {
            sbDeleteAll().catch(function(e) { console.warn('[Supabase] DeleteAll:', e.message); });
        }
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        ampliacion: 0,
        impresion: 0,
        invitacion: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion) stats.impresion++;
        if (selection.invitacion) stats.invitacion++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    document.getElementById('countAmpliacion').textContent = stats.ampliacion;
    document.getElementById('countImpresion').textContent = stats.impresion;
    document.getElementById('countInvitacion').textContent = stats.invitacion;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';

    if (photos.length === 0) {
        grid.innerHTML = '<div class="no-photos-message">No hay fotos disponibles aún.</div>';
        return;
    }

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.ampliacion) categories.push('ampliacion');
            if (selection.impresion) categories.push('impresion');
            if (selection.invitacion) categories.push('invitacion');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️ Ampliación</span>';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.invitacion) badgesHTML += '<span class="badge badge-invitacion">💌 Invitación</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        const displayNumber = `Foto ${index + 1}`;
        const mediaHTML = `
            <div class="photo-image-container">
                <img src="${getThumbPath(photo)}" alt="${displayNumber}" loading="lazy">
            </div>
        `;

        card.innerHTML = `
            ${mediaHTML}
            <div class="photo-number">${displayNumber}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        const selection = photoSelections[index] || {};
        let show = false;

        switch (currentFilter) {
            case 'all':
                show = true;
                break;
            case 'ampliacion':
                show = selection.ampliacion === true;
                break;
            case 'impresion':
                show = selection.impresion === true;
                break;
            case 'invitacion':
                show = selection.invitacion === true;
                break;
            case 'descartada':
                show = selection.descartada === true;
                break;
            case 'sin-clasificar':
                show = !selection.ampliacion && !selection.impresion && !selection.invitacion && !selection.descartada;
                break;
        }

        card.classList.toggle('hidden', !show);
    });
}

function setFilter(filter) {
    currentFilter = filter;
    applyFilter();

    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateFilterButtons() {
    const stats = getStats();

    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterAmpliacion').textContent = `Ampliación (${stats.ampliacion})`;
    document.getElementById('btnFilterImpresion').textContent = `Impresión (${stats.impresion})`;
    document.getElementById('btnFilterInvitacion').textContent = `Invitación (${stats.invitacion})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImageContainer = document.querySelector('.modal-image-container');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    const photo = photos[index];
    const displayNumber = `Foto ${index + 1}`;

    modalPhotoNumber.textContent = displayNumber;

    modalImageContainer.innerHTML = `
        <img id="modalImage" src="${photo}" alt="${displayNumber}">
        <div class="modal-photo-number" id="modalPhotoNumber">${displayNumber}</div>
    `;

    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    modal.classList.add('active');
    updateNavigationButtons();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    saveCurrentSelections();
    renderGallery();
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentPhotoIndex = null;
}

// ========================================
// NAVIGATION FUNCTIONS
// ========================================
function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;

    let newIndex;
    if (direction === "next") {
        newIndex = currentPhotoIndex + 1;
        if (newIndex >= photos.length) {
            newIndex = 0;
        }
    } else if (direction === "prev") {
        newIndex = currentPhotoIndex - 1;
        if (newIndex < 0) {
            newIndex = photos.length - 1;
        }
    }

    saveCurrentSelections();
    openModal(newIndex);
}

function saveCurrentSelections() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    document.querySelectorAll(".option-btn").forEach(btn => {
        const category = btn.dataset.category;
        selectedCategories[category] = btn.classList.contains("selected");
    });

    persistPhotoSelection(currentPhotoIndex, selectedCategories);
    updateStats();
    updateFilterButtons();
}

function persistPhotoSelection(index, selection, options) {
    const previousSelection = photoSelections[index] || {};
    const normalized = normalizeSelection(selection);
    const changed = !selectionsAreEqual(previousSelection, normalized);
    const silent = options && options.silent;

    if (!changed) {
        saveSelections({ sync: false });
        return false;
    }

    if (hasAnySelection(normalized)) {
        photoSelections[index] = normalized;
        saveSelections({ sync: false });
        if (typeof sbSaveSelection === 'function') {
            sbSaveSelection(index, normalized).catch(function(e) { console.warn('[Supabase] Save:', e.message); });
        } else if (typeof sbUpsertSelections === 'function') {
            sbUpsertSelections().catch(function(e) { console.warn('[Supabase] Sync:', e.message); });
        }
    } else {
        delete photoSelections[index];
        saveSelections({ sync: false });
        if (typeof sbDeleteSelection === 'function') {
            sbDeleteSelection(index).catch(function(e) { console.warn('[Supabase] Delete:', e.message); });
        }
    }

    if (!silent) showToast('Selección actualizada', 'success');
    return true;
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById("btnPrevPhoto");
    const btnNext = document.getElementById("btnNextPhoto");

    if (btnPrev && btnNext) {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }
}

function saveModalSelection() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        selectedCategories[category] = btn.classList.contains('selected');
    });

    persistPhotoSelection(currentPhotoIndex, selectedCategories, { silent: true });
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección guardada correctamente', 'success');
}

function deleteCurrentSelection() {
    if (currentPhotoIndex === null) return;
    const displayNumber = currentPhotoIndex + 1;
    if (!confirm('¿Borrar la selección de la foto ' + displayNumber + '?')) {
        return;
    }
    persistPhotoSelection(currentPhotoIndex, {}, { silent: true });
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección borrada', 'success');
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        evento: 'XV Años — Kimberli Perez',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: photo,
                ampliacion: selection.ampliacion || false,
                impresion: selection.impresion || false,
                invitacion: selection.invitacion || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-fotos-xv-kimberli-perez-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Reporte descargado correctamente', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '🌸 SELECCIÓN DE FOTOS - XV AÑOS KIMBERLI PEREZ\n';
    summary += '═══════════════════════════════════════════════════\n\n';
    summary += `📊 RESUMEN:\n`;
    summary += `   Total de fotos: ${photos.length}\n`;
    summary += `   🖼️  Para ampliación: ${stats.ampliacion}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}\n`;
    summary += `   💌 Para invitación: ${stats.invitacion}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    const categories = ['ampliacion', 'impresion', 'invitacion', 'descartada'];
    const categoryNames = {
        ampliacion: '🖼️  AMPLIACIÓN',
        impresion: '📸 IMPRESIÓN',
        invitacion: '💌 INVITACIÓN',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            const selection = photoSelections[index];
            if (selection && selection[category]) {
                photosInCategory.push(index + 1);
            }
        });

        if (photosInCategory.length > 0) {
            summary += `${categoryNames[category]}:\n`;
            summary += `   Fotos: ${photosInCategory.join(', ')}\n`;
            summary += `   Total: ${photosInCategory.length}\n\n`;
        }
    });

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        showToast('No se pudo copiar. Selecciona el texto manualmente.', 'error');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    loadSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();

    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterAmpliacion').addEventListener('click', () => setFilter('ampliacion'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterInvitacion').addEventListener('click', () => setFilter('invitacion'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin-clasificar'));

    document.getElementById('btnFilterAll').dataset.filter = 'all';
    document.getElementById('btnFilterAmpliacion').dataset.filter = 'ampliacion';
    document.getElementById('btnFilterImpresion').dataset.filter = 'impresion';
    document.getElementById('btnFilterInvitacion').dataset.filter = 'invitacion';
    document.getElementById('btnFilterDescartada').dataset.filter = 'descartada';
    document.getElementById('btnFilterSinClasificar').dataset.filter = 'sin-clasificar';

    document.getElementById('btnFilterAll').classList.add('active');

    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);
    document.getElementById('btnDeleteSelection').addEventListener('click', deleteCurrentSelection);

    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('selected');
        });
    });

    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') {
            closeModal();
        }
    });

    document.getElementById('btnPrevPhoto').addEventListener('click', () => {
        navigatePhoto('prev');
    });

    document.getElementById('btnNextPhoto').addEventListener('click', () => {
        navigatePhoto('next');
    });

    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
                saveModalSelection();
            } else if (e.key === 'ArrowLeft') {
                navigatePhoto('prev');
            } else if (e.key === 'ArrowRight') {
                navigatePhoto('next');
            }
        }
    });

});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        saveSelections({ sync: false });
    } else if (typeof sbRefreshSelections === 'function') {
        sbRefreshSelections().catch(function(e) { console.warn('[Supabase] Refresh:', e.message); });
    }
});

window.addEventListener('beforeunload', (e) => {
    saveSelections({ sync: false });
});

// ========================================
// DOWNLOAD FUNCTIONS
// ========================================
async function downloadCurrentPhoto() {
    if (currentPhotoIndex === null) return;
    const url = photos[currentPhotoIndex];
    if (!url) return;
    const filename = 'foto-' + (currentPhotoIndex + 1) + '.jpg';
    showToast('Descargando...', 'success');
    try {
        const resp = await fetch(url, { mode: 'cors' });
        const blob = await resp.blob();
        let finalBlob = blob;
        if (!blob.type.includes('jpeg') && !blob.type.includes('jpg')) {
            const bmp = await createImageBitmap(blob);
            const canvas = document.createElement('canvas');
            canvas.width = bmp.width; canvas.height = bmp.height;
            canvas.getContext('2d').drawImage(bmp, 0, 0);
            finalBlob = await new Promise(function(res){ canvas.toBlob(res, 'image/jpeg', 0.95); });
        }
        const a = document.createElement('a');
        const objUrl = URL.createObjectURL(finalBlob);
        a.href = objUrl; a.download = filename;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(function(){ URL.revokeObjectURL(objUrl); }, 2000);
        if (typeof sbRegistrarVisita === 'function') sbRegistrarVisita('descarga');
        showToast('Descargando ' + filename, 'success');
    } catch(e) {
        window.open(url, '_blank');
        showToast('Abriendo foto...', 'success');
    }
}

function downloadAndClose() {
    downloadCurrentPhoto();
    closeModal();
}

// Inyectar botones de descarga en el modal al cargar
(function injectDownloadButtons(){
    function tryInject(){
        var actions = document.querySelector('.modal-actions');
        if (!actions) return;
        if (document.getElementById('btnDownloadClose')) return;
        var btnDlClose = document.createElement('button');
        btnDlClose.id = 'btnDownloadClose';
        btnDlClose.className = 'btn';
        btnDlClose.textContent = '\u2B07 Descargar y Cerrar';
        btnDlClose.style.cssText = 'background:#6c5ce7;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDlClose.addEventListener('click', downloadAndClose);
        var btnDl = document.createElement('button');
        btnDl.id = 'btnDownloadPhoto';
        btnDl.className = 'btn';
        btnDl.textContent = '\u2B07 JPG';
        btnDl.style.cssText = 'background:#0984e3;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDl.addEventListener('click', downloadCurrentPhoto);
        actions.insertBefore(btnDlClose, actions.firstChild);
        actions.insertBefore(btnDl, btnDlClose);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tryInject);
    else tryInject();
})();
