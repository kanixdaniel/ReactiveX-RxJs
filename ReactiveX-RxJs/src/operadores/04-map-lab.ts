import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement('div');
texto.innerHTML = `
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum libero quibusdam magnam enim voluptas totam at laudantium placeat temporibus sed ab, atque tempora eius molestias sit ad asperiores pariatur neque.
  Nihil suscipit adipisci impedit molestias, architecto soluta necessitatibus ut, hic eligendi reprehenderit vero rem? Quas praesentium voluptates voluptate quos sunt, repellendus qui cum beatae ex adipisci minus, in eum numquam?
  Dolore deserunt libero perferendis, numquam, aliquam blanditiis explicabo facilis doloremque asperiores temporibus soluta magni minus sed culpa est quaerat, mollitia maiores cupiditate reiciendis. Quis doloremque perferendis commodi autem veniam porro.
  Laudantium excepturi, dolorem amet dicta totam doloremque id quibusdam quas. Iste mollitia earum praesentium explicabo assumenda porro, natus similique adipisci molestias vel, consectetur quia maxime eius eaque odio recusandae perferendis?
  Mollitia vero, eaque est exercitationem, praesentium excepturi ipsa cum id saepe pariatur quod odio, adipisci debitis! Officiis officia, iure voluptate suscipit atque cumque inventore fugit magnam pariatur facilis enim maxime.
  Voluptatum iusto nam aspernatur ex qui, totam minima odit at fuga eos nostrum dolore iste quae reiciendis odio eaque dignissimos ipsam, molestias sit veniam voluptatem illo! Magnam et voluptatibus quibusdam?
  Ab blanditiis molestiae quisquam, aliquam similique repellat natus dolore quis laboriosam quasi accusamus voluptatum dolor, ad itaque quia quo nihil voluptate. Deleniti expedita odio magni qui eius, molestiae totam repudiandae.
  Esse reprehenderit enim ipsam mollitia magni, dolore quis et velit temporibus excepturi illum eveniet sequi minus ducimus distinctio? Laudantium magnam aspernatur beatae aut labore id consectetur mollitia laborum aliquid officiis.
  Eveniet quisquam officia, necessitatibus quidem molestias cum vel dolor officiis, repellendus blanditiis quaerat perspiciatis explicabo provident illo reprehenderit. Optio accusantium aut commodi quae ipsam esse facilis eos earum cupiditate nisi.
  Laudantium eos similique earum quia delectus. Neque autem similique quidem, accusantium rem tenetur reprehenderit impedit ducimus illum eius possimus vero! Delectus necessitatibus ratione ab autem, natus iusto sapiente non inventore.
  Earum, ipsum! Ea impedit vero blanditiis, esse iusto magnam placeat. Ratione totam consectetur veritatis ipsam? Similique perspiciatis velit doloremque aliquam nisi debitis et, illo tempora nemo exercitationem eius enim fugiat!
  Perspiciatis omnis aut aperiam ex possimus at eligendi mollitia ipsum, sequi, quibusdam magnam? Odio fugiat iusto, saepe soluta consectetur repudiandae quis eaque consequatur doloremque sed amet tempore similique libero sapiente!
  Quo eum dolorem, quos omnis fuga placeat fugiat odio vero repellat itaque. Est, accusantium adipisci exercitationem aperiam sed, voluptate consectetur optio expedita eveniet fuga, facilis aliquid? Aliquid fugiat dignissimos placeat.
  Voluptate recusandae debitis necessitatibus voluptatibus explicabo veniam illum minima optio facilis, nisi autem libero. Quia facere expedita voluptate sint iusto, numquam voluptatibus possimus eligendi itaque nesciunt commodi tenetur qui nobis.
  Molestias, eius! Blanditiis, error tempora! Natus, id odio deleniti fugit debitis ullam quos blanditiis porro voluptate iusto, illo vitae praesentium repellendus amet? Excepturi vero eligendi consequatur soluta libero, doloribus quae!
  Rem sit necessitatibus consequuntur aut eius laboriosam repudiandae, dolorum architecto amet error laborum neque eum praesentium repellat omnis assumenda quasi voluptate! Cumque tenetur nostrum blanditiis ipsum dolorum? Voluptatum, expedita consequatur!
  Nihil, corrupti. Aut quaerat eos consequatur dignissimos doloremque obcaecati officia cumque rem facere magnam consectetur delectus velit explicabo mollitia modi distinctio, quas iure labore accusantium harum animi molestias. Saepe, recusandae!
  Numquam aut et voluptatum iste a ut natus sint omnis temporibus maiores, earum praesentium necessitatibus error fugit. Ex sequi dolores, dolore, cupiditate doloribus, facilis optio necessitatibus expedita nulla deleniti voluptatibus!
  Consectetur quae exercitationem aperiam odio illum fuga nam! Deleniti praesentium iusto repellat ipsum quae, incidunt, impedit modi a quisquam quod consequatur quis magni illo doloremque nostrum pariatur rerum dicta unde?
  Enim iste earum amet sint debitis molestias libero voluptates magnam, commodi aliquid esse dignissimos accusamus officia voluptas quo id illum fugit soluta magni quibusdam necessitatibus. Molestiae nihil optio eaque accusamus!
  Voluptatum laudantium, non sunt fugiat doloremque consequuntur porro accusamus ea sed assumenda totam reprehenderit minima magnam eligendi laboriosam dolores cupiditate eum aperiam praesentium dolore aut natus est asperiores sint. Quas?
  Perspiciatis inventore non asperiores, earum voluptates reiciendis, nobis in, sunt ab molestiae sequi numquam rem. Totam quae velit ad nam, mollitia architecto commodi, cumque ex sequi, facilis adipisci asperiores. Assumenda?
  Iste ad adipisci reiciendis dolorum tempora error earum, ducimus quaerat rerum quis, sit quo quam, perferendis expedita! Fugiat architecto obcaecati adipisci expedita harum nulla. Pariatur dignissimos iure quod necessitatibus eius!
  Minus, voluptas quis! Et facilis commodi tempora harum natus quaerat maiores dolores quidem quam voluptate consectetur architecto alias, illo dolorem qui eveniet? Molestias corporis tempora facilis pariatur mollitia, laborum non.
  Repellat eligendi expedita veniam totam! Voluptates maiores mollitia perspiciatis corrupti quasi adipisci velit ipsa impedit. Delectus repellendus ullam pariatur illum accusantium officia reprehenderit, officiis harum rerum laudantium deleniti odit quibusdam.
  Ullam molestias ea fuga et mollitia saepe alias eveniet fugit? Dignissimos quia eveniet neque corrupti fugiat alias veniam accusantium, rem sequi, libero assumenda, tempora quasi deserunt tenetur exercitationem aperiam ea!
  Ea dicta id maxime! Molestiae iure accusantium sit adipisci tempora. Corrupti, odit perspiciatis quis, officia ducimus nemo, tempora veniam similique repellat quas veritatis quos rem eum debitis sequi ullam! Tempora?
  Quod at nam recusandae atque? Eum officia ut consectetur, reiciendis voluptates, minima cum obcaecati ea tenetur aliquam soluta harum deleniti. Illum velit cumque, quis laborum nulla necessitatibus! Pariatur, esse velit.
  Consequatur fugiat, iste numquam illo asperiores fugit neque ex quis aliquid non quae unde tempora corporis illum dolorum reprehenderit quidem deleniti, vero a atque? Mollitia rem iure molestiae voluptate quasi!
  Nulla similique consectetur saepe vel dolorum, hic blanditiis mollitia earum eaque ut natus est magnam, porro beatae nam aspernatur veniam ex. Nesciunt odio ipsam iste odit et, id sit facere!
  Quos modi ut atque excepturi veniam. Temporibus deserunt reprehenderit eos minus maxime quisquam sint assumenda accusantium voluptate deleniti, ad et iure obcaecati veritatis magni eligendi eum ipsum odio, alias voluptatum!
  Vel magnam, ut accusamus corporis reiciendis hic assumenda! Deserunt molestias dicta natus dolorum debitis cupiditate. Est optio eum officia perspiciatis atque reprehenderit beatae recusandae temporibus illum assumenda? Quis, corrupti. Veritatis?
  Accusantium modi impedit in a veritatis, soluta distinctio perspiciatis ipsam. Vitae deserunt sed maiores amet nesciunt ipsum possimus eveniet odio aperiam sint quos sunt dolores accusamus, deleniti nisi iste totam.
  Dignissimos eveniet nulla pariatur delectus placeat tempore soluta ab vero totam vel at perspiciatis unde quod cum tempora beatae harum mollitia, deserunt enim libero fugit neque nostrum atque voluptatibus. Nulla.
  Doloribus repellat voluptas sint eveniet pariatur debitis, aperiam sit at dolor quaerat, ex quia labore magnam delectus eius iusto. Sunt, corporis voluptate cupiditate eaque quia recusandae ex enim temporibus eius.
  Deserunt architecto qui unde quidem sequi, mollitia sed nobis fuga nihil ea? Fuga aperiam, voluptates dolorum ipsum dicta perspiciatis aliquam voluptatum? Omnis atque odio officiis. Eveniet non laudantium voluptates voluptatum.
  Inventore laboriosam pariatur cumque deserunt aspernatur suscipit nam quidem explicabo, nesciunt non amet quibusdam odio quisquam quos labore aliquid quam aut ipsa similique nihil eius id reiciendis commodi! Odit, adipisci.
  Asperiores facilis minima cumque, quia corporis rerum, suscipit aspernatur id nulla voluptas enim. Similique accusantium qui dolor illo accusamus voluptatibus iusto aliquam explicabo assumenda nihil, labore cum modi corporis eius?
  Velit at, voluptatem id, magnam veniam qui quam ex voluptas doloremque deleniti cumque ut natus facere excepturi iste animi reprehenderit minus rerum quos corrupti vitae repellat quasi. In, maiores maxime.
  Dolorem eum aspernatur natus, sed incidunt voluptatibus quasi quas tempore deserunt necessitatibus voluptatem provident fugit quibusdam maxime consequatur quis, dolorum quidem. Optio vitae similique ea veniam ex culpa, incidunt quod.
  Recusandae dolorum voluptatem neque! Veniam, culpa. Dignissimos ut amet nobis dolor vitae? Laboriosam, dolores. Asperiores ullam magni eligendi eaque praesentium autem consectetur veritatis fugiat beatae, ipsa sed maxime aperiam adipisci.
  Accusamus sapiente voluptas ab ad adipisci saepe dolores, rerum numquam at consequatur sequi optio nam quos omnis tenetur, quo doloribus libero illum asperiores eveniet iste commodi aspernatur ipsa? Quisquam, repellendus!
  Dolor veritatis recusandae excepturi dolorem quidem itaque quam reiciendis aliquam. A officia, sint adipisci, vero ab qui modi ducimus harum velit eaque laboriosam nobis optio quidem suscipit aliquam eveniet ullam.
  Vitae quod culpa corporis rem, hic tempora alias nihil velit magni aliquam numquam voluptates ex delectus provident ipsa suscipit voluptas illum mollitia voluptatibus adipisci asperiores excepturi. Corporis placeat eius odio.
  Neque tempora optio sunt voluptatibus porro, nostrum maiores facilis enim qui doloribus ratione veritatis dicta quibusdam magnam reiciendis dolorem ullam quaerat autem minus itaque nobis. Pariatur ratione ab nostrum corporis.
  Id quos tempora in eum ab praesentium nemo deleniti laborum tenetur illo expedita hic voluptatem nam voluptatibus nisi laboriosam maiores, quae illum sequi est? Exercitationem at repellendus a repellat pariatur?
  Facilis doloribus ea perferendis ipsa, natus alias quos illum esse neque enim vero obcaecati nisi beatae vitae voluptates quisquam similique voluptatibus, ad eius dolor, unde rem. Vel sed iure itaque.
  Repellat, eum tempore facilis quidem nesciunt, voluptatibus obcaecati laudantium reiciendis suscipit praesentium fuga unde corrupti sunt labore adipisci nostrum, reprehenderit officia ipsam! Voluptatibus reprehenderit ad molestiae id! Ullam, laboriosam consequuntur!
  Pariatur non voluptatibus, quasi ab, amet voluptatum nemo corrupti quae nihil corporis repudiandae dignissimos unde. Molestiae beatae autem aut quibusdam ab ut officiis? Consectetur libero ex quidem velit modi fuga?
  Quibusdam totam a nihil necessitatibus. Odio, nobis repudiandae aspernatur nemo deleniti, asperiores a eaque accusamus ad praesentium quo eos at reiciendis. Culpa minima maiores veritatis blanditiis quibusdam ea pariatur explicabo.
  Minima hic expedita, et quos est unde autem ullam accusamus! Nesciunt, quibusdam. Impedit, culpa? Autem ut, inventore culpa est, fugiat dolorum blanditiis, nam earum facere voluptatem voluptatum dolorem sed officiis.
  Explicabo, illo eligendi! Ea ducimus saepe voluptatum aliquam quibusdam autem quod eaque libero, odio repellendus quidem similique porro reiciendis commodi debitis minima aliquid est, deserunt sapiente in iste impedit nostrum.
  Architecto quaerat reprehenderit quis nesciunt tenetur eos libero impedit ipsam ullam asperiores voluptatibus nisi voluptatum odio optio error non deserunt, laudantium, magni vero atque? Magnam tempore laboriosam quia ipsam atque.
  Suscipit, aliquid ullam quaerat iste similique voluptatibus et magni doloremque sit at odio consequuntur animi corporis autem facere id enim aspernatur quas ut! Vero quaerat quos ipsa recusandae, minus blanditiis?
  Consequuntur voluptas minus labore ullam laudantium aliquid alias suscipit assumenda recusandae tenetur sit nemo quisquam, magni vitae rerum voluptatum illum accusamus? Beatae, dicta atque sunt porro consequatur vitae ratione autem.
  Esse perspiciatis nemo recusandae deserunt laudantium molestiae asperiores, doloribus rerum animi itaque quaerat iste. Neque libero esse vero alias mollitia, reiciendis necessitatibus eum veniam laudantium, deleniti, inventore molestiae nisi cumque.
  Atque vitae enim, dolore ea assumenda, dolorem libero ducimus voluptatem, molestiae temporibus sed earum. Excepturi, dolor sint veniam enim minus voluptate aspernatur maiores similique atque libero asperiores obcaecati distinctio voluptates?
  Reprehenderit quo molestiae quos dignissimos, numquam possimus doloribus exercitationem labore magni cum delectus voluptatem quam vitae blanditiis placeat saepe tempora enim voluptatibus consectetur nihil vel explicabo eaque autem perspiciatis! Recusandae!
  Repudiandae sapiente dolor, quasi dolorum itaque vitae exercitationem non aut modi corporis nisi amet libero temporibus hic veritatis voluptatibus facilis commodi provident accusantium quas, soluta quaerat harum obcaecati tenetur. Cum?
  Saepe unde voluptatibus provident minus nemo dolorem impedit nisi dolores inventore dolorum sunt, quo necessitatibus consectetur aliquam fuga, qui adipisci ipsam laborum quidem ipsum facilis corporis. Sapiente quis enim deleniti!
  Officia tempore aliquid molestiae voluptatibus excepturi quam cum enim aut fugit, veritatis harum alias error esse adipisci eius cupiditate officiis non eligendi quos explicabo voluptas nobis et optio quia. Id!
  Error possimus velit temporibus incidunt illum enim? Necessitatibus quidem repellendus quia, sed fugit hic tempore consectetur consequuntur minus ipsa magnam placeat recusandae voluptas, atque accusantium rem ratione culpa sequi eum?
  Nesciunt officiis perferendis culpa id, perspiciatis voluptas expedita! Et placeat, tempora dolorem qui distinctio perspiciatis ratione eaque praesentium. Minus, iure facilis? Dolores quae ullam labore corrupti soluta distinctio veritatis officia.
  Fugit omnis deserunt ipsa excepturi nisi itaque aliquid, debitis maxime autem minima velit neque vitae consequatur natus accusantium laborum asperiores et eaque optio delectus perspiciatis iste quas tenetur fuga. Qui?
  Voluptas earum eos magnam sint corporis eveniet maxime magni voluptates. Nostrum alias voluptate, consectetur dolorum labore facilis optio vero aut? Quas ut est quaerat doloremque voluptatum necessitatibus quae repellat odit.
  Dignissimos labore dicta repellat odit dolor? Repellendus, distinctio quam maxime eum animi ipsa architecto error quisquam. Amet iste, perferendis nostrum totam aperiam numquam soluta, quas quibusdam ab dignissimos doloribus laudantium?
  Ipsa facere placeat veritatis eaque veniam saepe animi, vel perferendis, delectus, sequi itaque deleniti voluptatem! Harum eius pariatur minima numquam beatae odit cupiditate, doloribus veritatis blanditiis! Repellendus alias in earum.
  Nobis eligendi, culpa asperiores possimus dignissimos vel voluptatem magnam totam magni officiis! Ea optio deleniti quis sequi perspiciatis dolorem explicabo ratione, officiis porro? Laboriosam in, voluptatem at officiis expedita nesciunt.
  Excepturi consectetur exercitationem vero voluptate, atque eaque quae dolorum illum! Itaque eveniet quisquam cumque omnis tempora excepturi animi, minus cupiditate facilis tempore debitis magni ipsam quam est quasi? Excepturi, quis.
  Consectetur culpa optio soluta nobis delectus quo, ad praesentium veritatis aut error voluptas tenetur adipisci magni quae iure voluptatem. Eligendi dolorem praesentium quis maiores debitis impedit quo delectus at aperiam!
  Ullam, minima excepturi quod ipsa quo corporis fugit aperiam deserunt fugiat dolor exercitationem, architecto placeat itaque iste consectetur quia quisquam, nobis earum. Enim, velit architecto. Odio repellat quod hic voluptatem?
  Quasi voluptas eum esse dolore placeat dicta maxime cum ex in repudiandae totam corporis laboriosam eos ipsam quis blanditiis inventore voluptate, harum consequuntur magnam fugit modi excepturi! Cumque, molestiae a?
  Reprehenderit eius odio obcaecati mollitia magnam voluptas delectus accusamus ducimus aut voluptate facilis repellendus perferendis, officiis sapiente consectetur odit accusantium illo! Et, voluptas consectetur harum minus quo mollitia at ad.
  Praesentium natus eaque exercitationem odit eveniet totam sint ipsa suscipit, officia error quod autem voluptatibus molestias pariatur tenetur quidem vitae illo maiores reiciendis, enim velit nisi temporibus ex dolorum. Tenetur?
  Rem aspernatur distinctio facere suscipit mollitia eos unde numquam tempore adipisci? Nesciunt consectetur cum officiis et? Possimus, nulla? Cumque fugiat, repellat laudantium voluptatum adipisci officiis. Quasi libero accusamus cupiditate eveniet.
  Modi at culpa porro temporibus, nobis autem non! Ullam laborum porro quas numquam veritatis dignissimos consequuntur minima hic modi magni maiores delectus repellat fugiat accusamus, tempora laboriosam. Nihil, repudiandae consectetur?
  Ut harum incidunt vitae rem possimus numquam aut molestias, repellat unde magnam illo suscipit cupiditate accusamus vel fuga, exercitationem omnis asperiores? Iusto quisquam beatae ea dolore quasi dolorem iure reiciendis.
  Nobis quam vero sit, nesciunt dolores ipsum distinctio vitae provident repellat blanditiis cupiditate ut eos neque laudantium quisquam, facilis odit doloremque delectus ipsam similique dolorem quis! Inventore excepturi doloremque architecto?
  Numquam saepe eum, consequuntur quisquam in fugit corrupti modi voluptatem distinctio. Dolores unde nemo, velit eius autem illum cumque, suscipit ratione asperiores fuga repellat qui quis optio, temporibus illo esse?
  Provident, accusamus numquam nisi maxime ex expedita cumque illum magnam nesciunt ab aperiam deleniti voluptatum corrupti, repudiandae praesentium quod hic. Rem veniam quas alias eius recusandae. Ipsum aperiam numquam natus?
  Placeat quos tempora reprehenderit minima voluptatibus totam expedita quis eos vitae cumque! Mollitia sapiente consectetur eius adipisci totam eligendi doloribus, vel culpa nisi! Cum earum temporibus quaerat excepturi, incidunt corporis.
  Magnam vero consectetur iste quas voluptas quis totam optio harum laudantium? Illo perspiciatis aperiam, quam rem eaque aspernatur veritatis, quidem, ut aliquid itaque eius laborum sunt vitae accusamus omnis. Dolores?
  Possimus perspiciatis, ad ducimus inventore accusamus illo dolores numquam ea eum suscipit animi dignissimos facilis dolore, velit a fugiat culpa quis. Numquam, maxime deleniti autem omnis minima excepturi obcaecati alias!
  Recusandae iure cum similique, qui voluptatum neque laborum corrupti quas nihil pariatur vitae tempora debitis illo quidem quo autem quibusdam mollitia nam deleniti unde vel at expedita libero doloremque. Officiis!
  Consequuntur modi ut aliquam officia eos ipsam maxime doloribus recusandae reiciendis quibusdam. Laborum nemo dolorem, sit eligendi ad magni iste blanditiis nulla! Consequuntur quibusdam repellendus, rem sit quasi laboriosam nihil?
  Sunt molestias cumque iste qui blanditiis voluptates harum itaque quae. Laboriosam, libero aperiam! Fugiat adipisci quia aliquam amet, assumenda dolorum id et voluptatibus alias ratione rerum facere, natus debitis odit.
  Velit facere quia et! Culpa quisquam similique totam dolor, minus numquam, maiores, vel exercitationem molestiae inventore esse assumenda quaerat beatae nam reprehenderit. Vero magni commodi maxime, debitis sint doloribus libero.
  Repellat nostrum nisi adipisci quidem, exercitationem fugit repellendus quae nesciunt earum consequatur voluptatibus distinctio voluptate eos! Cum, rem laudantium, ipsam eius numquam reiciendis vitae nostrum iure minima, sint neque corporis!
  Nesciunt, consequuntur placeat? Maxime dolorem quasi impedit? Consequuntur ipsum modi quisquam rem, ipsam voluptas labore consequatur quibusdam libero excepturi! Possimus a nulla hic iusto necessitatibus rerum officiis error consequatur sunt.
  Quam maiores facere necessitatibus! Neque rerum commodi cupiditate voluptas, ea quos aut vero quasi beatae tenetur facilis unde nobis repudiandae quibusdam? Quod ex doloremque similique, sequi natus dolor nesciunt eligendi?
  Commodi numquam debitis omnis maiores odit enim quaerat ut eum eius hic. Animi natus doloribus sequi provident expedita? Adipisci cupiditate vitae nesciunt! Minima quasi maxime consectetur dignissimos quaerat, omnis vel.
  Molestias, soluta. Est blanditiis nostrum magni obcaecati ea corrupti iure quibusdam recusandae! Hic molestiae magnam excepturi praesentium sequi cumque culpa atque alias inventore minus libero laudantium exercitationem, ea enim illo!
  Sint labore amet saepe, assumenda consequuntur soluta, tenetur magni ea cum itaque odio quasi! Deserunt consectetur obcaecati repellat facilis placeat necessitatibus asperiores amet, vel commodi, pariatur, nostrum cum eligendi impedit?
  Alias, recusandae et? Libero incidunt porro mollitia explicabo odio quae ducimus, reprehenderit recusandae provident quis amet nihil quas esse? Iure minus pariatur corrupti. Earum dignissimos cum eius distinctio, nisi perspiciatis!
  Mollitia natus repellat corporis veniam consequuntur aut eum corrupti explicabo, rem incidunt ducimus, dignissimos sunt beatae pariatur ea laborum nam facere repellendus eos quisquam facilis? Omnis pariatur fuga dolore beatae.
  Rerum obcaecati dolores, doloribus laboriosam dolore error nam? Eos, aperiam perferendis! Id consequatur voluptates atque tempore quia saepe voluptatum explicabo molestiae, mollitia necessitatibus quasi dolorem dolor sit earum blanditiis nostrum!
  Provident, reprehenderit deserunt eaque illo enim optio reiciendis et ipsa totam culpa quia doloremque eum! Tempora quod numquam quis voluptate veritatis, molestias voluptas aspernatur odit. Id, illo minus. Dolor, cum.
  Possimus reprehenderit excepturi placeat consequatur illo laudantium, eos nam odit dolores beatae quas a error similique. Provident mollitia perspiciatis, quasi obcaecati totam ullam eum atque ipsam quod, delectus quibusdam aspernatur?
  Voluptatum praesentium error tenetur asperiores nemo et porro tempora, explicabo quaerat. Soluta necessitatibus libero, explicabo recusandae repellat quod ratione veniam dolore sint, laudantium quidem distinctio alias officia dolores? A, sapiente?
  Consequatur distinctio temporibus assumenda repellat animi corporis! Assumenda illo ad hic ducimus officia eligendi, soluta reiciendis exercitationem repellat dignissimos saepe natus praesentium quos laboriosam laborum quam blanditiis enim eum aut.
</p>
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// Función que realiza el calculo
const calcularPorcentajeScroll = (event) => {
  const { clientHeight, scrollHeight, scrollTop} = event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}


// Stream
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
  // map(event => calcularPorcentajeScroll(event))
  map(calcularPorcentajeScroll),
  tap(console.log)
);

progress$.subscribe(porcentaje => {
  progressBar.style.width = `${porcentaje}%`
})