
const SRC={
'1A':{label:'Source 1A',type:'Speech Extract',
html:`<div class="sp-body">Nobody knows what Soviet Russia and its communist international organisation intend to do in the immediate future, or what are the limits, if any, to their expansive tendencies.<br><br>From Stettin in the Baltic to Trieste in the Adriatic an <em>Iron Curtain</em> has descended across the continent. Behind that line lie all the capitals of the ancient states of Central and Eastern Europe. Warsaw, Berlin, Prague, Vienna, Budapest, Belgrade, Bucharest and Sofia, all these famous cities and the populations around them lie in what I must call the Soviet sphere and all are subject, in one form or another, not only to Soviet influence, but to a very high and, in some cases, increasing measure of control from Moscow.<br><br>Athens alone, Greece with its immortal glories, is free to decide its future at an election under British, American and French observation. The Russian-dominated Polish government has been encouraged to make enormous and wrongful inroads into Germany and mass expulsions of millions of Germans, on a scale grievous and undreamed of, are now taking place. The communist parties, which were very small in all these eastern states of Europe, have been raised to pre-eminence and power far beyond their numbers and are seeking everywhere to obtain totalitarian control.</div>`,
attr:'Churchill, "Iron Curtain" speech, Fulton, Missouri, 5 March 1946'},

'1B':{label:'Source 1B',type:'Political Cartoon',
html:`<img class="sp-img" src="cartoon.png" alt="Illingworth cartoon depicting Stalin\'s expansion across Europe, Daily Mail 1947">`,
attr:'Illingworth, <em>The Daily Mail</em>, 16 June 1947, on Stalin\'s policy of expansion in Eastern Europe'},

'1C':{label:'Source 1C',type:'Historical Article',
html:`<div class="sp-body">In early 1947, with Byrnes out and George Marshall in as the Secretary of State, the anti-communist governments of Turkey and Greece claimed to be under severe Soviet pressure and could not guarantee their own survival. Convinced that the United States must help the Turkish and Greek governments, the administration nevertheless faced the difficult task of persuading a fiscally careful Congress to provide the aid needed.<br><br>On 27 February Truman called a meeting between administration officials and a handful of leading senators and members of Congress. Dean Acheson described this encounter as 'Armageddon'. Marshall spoke first, emphasising the need for the United States to act because it was the right thing to do and because no one else would help. The legislators seemed unmoved. Acheson asked to speak.<br><br>Immediately he changed the terms of the debate. The crisis in south-eastern Europe, he said, was no local dust-up but one that involved the two Cold War powers. The Soviets were pressuring Turkey and Greece. At stake was a vast portion of the Free World, for if Greece went communist, the corruption of Greece would infect all to the east. It would also carry the infection to Africa through Asia Minor and Europe through Italy and France. Only the United States stood in the way of a communist onslaught that would, if successful, snuff out freedom and destroy all hope of economic recovery in parts of three continents.</div>`,
attr:'"Kissinger and Acheson: The Secretary of State and the Cold War" by W Lafeber, 1977'},

'1D':{label:'Source 1D',type:'Historical Textbook',
html:`<div class="sp-body">The Russians sent an eighty-strong delegation to Paris, where the European Recovery Programme (Marshall Plan) was outlined and East European countries, like Czechoslovakia and Poland, expressed keen interest. But Stalin saw the American offer as a challenge to his sphere of influence. He warned the Czechs and others against participating and withdrew the Soviet delegation.<br><br>That autumn he declared ideological war on Western capitalism, creating the Cominform to orchestrate foreign communist parties and to replace the coalitionist strategy in France and Italy with strikes intended to bring down the governments. In the East, Soviet influence now became Soviet domination. The coup in Czechoslovakia in February 1948 was followed by the 'Stalinisation' of much of the region. All but communists were proscribed, those independent of Moscow were purged, agriculture and heavy industry were brought under state control, and civil and political liberties systematically abolished.<br><br>The Czech coup and the Berlin Crisis did much to damage the Soviet image in Europe, even in France where the Communist Party was still picking up about a quarter of the vote. Equally important, well-advertised Marshall Aid was winning hearts and minds. Between 1948 and 1951 the United States put into Western Europe about $13 billion…</div>`,
attr:'<em>The Oxford Illustrated History of Modern Europe</em>, ed. TCW Blanning, 1996'},

'compare':{label:'Sources 1A + 1C',type:'Comparison',
html:`<div class="sp-body" style="font-size:.82rem"><strong>Source 1A</strong>, Churchill (1946): Soviet sphere covers Warsaw to Sofia; communist parties raised to power beyond their numbers; seeking totalitarian control.<br><br><strong>Source 1C</strong>, Acheson (1947): Greece and Turkey under severe Soviet pressure; if Greece falls, communism spreads to three continents; only the US can stop it.</div>`,
attr:'Use both sources to answer the comparison question'},

'para':{label:'Paragraph Task',type:'Q1.6, 8 marks',
html:`<div class="sp-body" style="font-size:.85rem"><strong>Question:</strong> Using the information in the relevant sources and your own knowledge, write a paragraph of about EIGHT lines (about 80 words) explaining how the spread of communism in Europe after the Second World War (1945) led to Cold War tensions between the USA and the USSR.<br><br><em>Build your paragraph step by step. Each choice below constructs one part of your answer.</em></div>`,
attr:'Assessed holistically at Level 1 (0–2), Level 2 (3–5), or Level 3 (6–8)'},

'mta':{label:'Mark This Answer',type:'Evaluative Task',
html:`<div class="sp-body" style="font-size:.85rem">Two learners attempted the paragraph question. Read each answer carefully, then evaluate it against the criteria below.<br><br><strong style="color:#D4A745">&#9733; Bonus marks:</strong> Each correct evaluation earns 1 bonus mark (up to 12 total), added on top of your 50-mark score.<br><br>Think like an examiner: does the answer address the question? Does it use source evidence AND own knowledge? Does it explain WHY, or just list WHAT?</div>`,
attr:'Paragraph rubric: L1 (0–2) = little understanding; L2 (3–5) = some understanding; L3 (6–8) = thorough understanding'}
};

// ALL QUESTIONS: flat array, each knows its source
const QS=[
// Source 1A: L1: 7 marks, L2: 6 marks, L3: 4 marks
{id:'q1',src:'1A',num:'1.1.1',m:2,t:50,lv:1,ll:'Extraction',
t:'What, according to the source, was Churchill concerned about regarding the Soviet Union\'s intentions?',
opts:['The Soviet Union\'s declared intention to invade Western Europe directly','The unlimited and unknowable scope of Soviet expansive tendencies','The Soviet Union\'s plan to build atomic weapons by the end of 1946','The Soviet Union\'s refusal to attend the new United Nations assemblies'],
c:1,fb:'The source states "nobody knows what Soviet Russia… intend to do… or what are the limits, if any, to their expansive tendencies." Churchill\'s specific concern is about the <em>unknowable scope</em> of Soviet expansion. Every other option introduces ideas not found in this source. Extraction = find the answer IN the text.'},

{id:'q2',src:'1A',num:'1.1.2',m:2,t:70,lv:2,ll:'Concept',
t:'Define the concept <em>Iron Curtain</em> in your own words.',
h:'"In your own words" means you must show you understand the concept, not repeat Churchill\'s phrase.',
opts:['A line of fortified border posts and watchtowers constructed by Stalin along the western frontier of the Soviet Union between 1945 and 1947','An imaginary dividing line separating communist-controlled Eastern Europe from capitalist Western Europe after the Soviet Union extended its sphere of influence','The concrete barrier built across the city of Berlin in 1961 to stop East Germans from escaping into the capitalist Western sectors of the city','A formal diplomatic treaty signed by the USA and USSR at the Yalta Conference dividing Europe into officially recognised superpower zones of influence'],
c:1,fb:'The Iron Curtain was a <em>metaphor</em>, not a physical structure. It described the political and ideological division of Europe into a Soviet-controlled East and a capitalist West. The Berlin Wall (1961) was one later physical manifestation, but it came 15 years after this speech. "Define in your own words" = show conceptual understanding, not paraphrase.'},

{id:'q3',src:'1A',num:'1.1.3',m:2,t:50,lv:1,ll:'Extraction',
t:'Identify TWO famous cities in the source that lie under the Soviet sphere of influence.',
multi:true,mx:2,
opts:['Warsaw','Athens','Fulton','Prague','London'],
c:[0,3],fb:'The source lists Warsaw, Berlin, Prague, Vienna, Budapest, Belgrade, Bucharest, Sofia. Athens is explicitly EXCLUDED ("Greece alone is free"). Fulton is in Missouri, USA. London is not mentioned. Always verify your answer is IN the source.'},

{id:'q4',src:'1A',num:'1.1.4',m:2,t:70,lv:2,ll:'Interpretation',
t:'Comment on why Churchill was worried about the rise and domination of communist parties in the eastern states of Europe.',
opts:['Because these parties had won genuine landslide majorities in free post-war elections across Eastern Europe (suggesting authentic popular support for communism) and were now using that mandate to dismantle existing institutions','Because these parties, though originally very small, had been artificially elevated to dominance far beyond their genuine support (suggesting Soviet manipulation) and were pursuing totalitarian control','Because these parties, though loyal to Moscow at first, were now breaking with Stalin and pursuing independent national communism (suggesting fragmentation) that risked dragging Europe into a wider regional conflict','Because these parties were openly rebuilding armed militias drawn from former wartime resistance fighters (suggesting preparation for revolution) and were demanding the rearmament of defeated Germany'],
c:1,fb:'The key phrase: "very small… raised to pre-eminence and power far beyond their numbers." Churchill\'s worry isn\'t that communism is popular. It\'s that it\'s been <em>imposed</em> artificially. Parties with tiny real support now dominate and seek "totalitarian control." Option A is wrong because the source says the opposite: these parties rose BEYOND their numbers, not through genuine elections.'},

{id:'q5',src:'1A',num:'1.1.5',m:4,t:120,lv:3,ll:'Reliability',
t:'Explain why a historian would consider this source reliable in understanding the threat posed by Soviet expansionism in Europe.',
h:'4-mark reliability = TWO developed reasons (2×2). Consider: WHO, WHEN, PURPOSE, PERSPECTIVE.',
opts:[
'Reliable because Churchill had first-hand knowledge from wartime conferences with Stalin (Yalta, Potsdam), and the speech was delivered in March 1946 during the very period of Soviet expansion, making it a contemporary primary source from a uniquely informed observer. However, his anti-communist stance and political goal of rallying US support mean the language may overstate the threat',
'Reliable because Churchill was a respected world leader whose views were shared by most Western governments at the time, and the fact that the speech was delivered at an American university shows it was an academic analysis rather than political propaganda. However, it only represents one leader\'s personal opinion',
'Reliable because Churchill was no longer Prime Minister in March 1946, which meant he could speak freely without the constraints of office, making this a more honest assessment than an official government statement. However, being out of office also meant he lacked access to current intelligence reports',
'Reliable because the speech was delivered publicly and reported by international media, meaning Churchill would have been careful to state only verified facts. However, public speeches are designed to persuade rather than inform, which limits their value as historical evidence'
],c:0,c:0,fb:'Reliability evaluation requires weighing strengths AND limitations. Strengths: (1) Churchill had direct experience negotiating with Stalin at Yalta and Potsdam; (2) the speech is contemporaneous, delivered during the events it describes. Limitations: Churchill had clear political motives (rallying US involvement) and this represents only a Western perspective. Britain was NOT neutral (option D). Being out of office (option C) doesn\'t invalidate his extensive prior experience. Never say a source is simply "reliable"; always weigh both sides.'},

// Source 1B (Cartoon)
{id:'q6',src:'1B',num:'1.2.1',m:4,t:100,lv:2,ll:'Interpretation',
t:'Comment on how Stalin has been portrayed in the cartoon.',
h:'Focus on the cartoonist\'s VISUAL CHOICES: size, positioning, body language, the map legend. What argument is being made through these choices?',
opts:[
'Stalin is shown as physically large and dominant, reaching across the map to grasp European countries, portraying him as an aggressive expansionist. The map legend classifies countries by degree of Soviet control, suggesting a systematic and planned takeover of Europe, with question marks indicating the threat is still growing',
'Stalin is shown as physically small and hesitant, reaching only tentatively toward countries marked with question marks, portraying him as uncertain and indecisive. The map legend suggests Soviet foreign policy was reactive and improvised, with question marks indicating Stalin himself did not know which states to absorb',
'Stalin is portrayed as a defensive leader shielding loyal allied states behind his body, with the map legend grading countries by levels of protection rather than control, suggesting the cartoon depicts a Soviet buffer zone built to resist Western economic and military pressure rather than aggressive eastward expansion',
'Stalin is depicted as an orderly administrator quietly cataloguing the states of Eastern Europe into a single economic bloc, with the colour-coded map legend suggesting peaceful integration and shared planning, with question marks indicating countries still considering whether to join voluntarily'
],c:0,fb:'Every visual choice in a cartoon is an argument. Stalin\'s oversized body = dominance. His arm reaching across the map = aggression and expansion. The colour-coded legend = systematic, planned control. Question marks over France, Finland, etc. = the threat is ongoing and unresolved. This is a BRITISH cartoon, so it represents a Western anti-Soviet perspective. A Soviet cartoonist would likely have shown American imperialism as the real threat.'},

{id:'q7a',src:'1B',num:'1.2.2(a)',m:2,t:70,lv:2,ll:'Analysis',
t:'Using the source and your own knowledge, explain why communism had NOT expanded into Greece and Turkey.',
opts:[
'Greece and Turkey received military and economic assistance from the United States through the Truman Doctrine (1947), which was specifically designed to counter Soviet pressure and support anti-communist governments in these countries',
'Greece and Turkey had long-established parliamentary traditions and entrenched democratic institutions that made their populations deeply resistant to communist ideology, and both governments had outlawed their domestic communist parties immediately after the Second World War in 1945',
'Greece and Turkey were directly protected by NATO ground forces stationed permanently along their northern borders from 1946 onwards, which acted as a deterrent against Soviet-backed insurgency and prevented the spread of communism southwards from the Balkans',
'Britain maintained a strong military presence in Greece throughout the postwar period and continued funding the Greek government\'s war against communist insurgents using its own imperial resources, meaning American involvement in the region was unnecessary and never formally requested by the British government'
],c:0,fb:'The cartoon shows Greece and Turkey outside the Soviet bloc; your own knowledge explains WHY. The Truman Doctrine (March 1947) was the first concrete US containment policy, providing military and economic aid specifically to Greece and Turkey. NATO didn\'t exist until 1949 (option C). Britain actually told the US in early 1947 that it could no longer afford to support Greece, and that announcement is exactly what triggered the Truman Doctrine (option D is wrong). This is a "source + own knowledge" question, so you must use both.'},

{id:'q7b',src:'1B',num:'1.2.2(b)',m:2,t:70,lv:2,ll:'Analysis',
t:'Using the source and your own knowledge, explain why communism had NOT expanded into France.',
opts:[
'Although France had a significant communist party, it remained in the Western camp because American economic aid through the Marshall Plan strengthened the French economy and the US used political influence to counter communist support, keeping France on the western side of the Iron Curtain',
'Although France had a strong communist party, it remained in the Western camp because its geographical position west of the Iron Curtain meant the Soviet Union could not supply or arm French communists without first crossing the hostile territory of West Germany and the Low Countries','Although France had a strong communist party, it remained in the Western camp because the French Communist Party voluntarily abandoned revolutionary tactics after 1945 and committed itself to parliamentary politics, choosing peaceful electoral competition over a Soviet-backed seizure of power','Although France had a strong communist party, it remained in the Western camp because the country\'s recent experience of Nazi occupation had left the French population deeply suspicious of any foreign ideology, including Soviet communism, and reluctant to surrender sovereignty to any outside power'
],c:0,fb:'France is a nuanced case: it actually had a STRONG communist party (Source 1D confirms "about a quarter of the vote"). So why didn\'t it fall? The Marshall Plan provided economic recovery (Source 1D: "winning hearts and minds"), and France sat on the western side of the Iron Curtain. Option B is factually wrong: France never banned the Communist Party. Geography alone (option D) doesn\'t explain political outcomes.'},

// Source 1C
{id:'q8',src:'1C',num:'1.3.1',m:1,t:30,lv:1,ll:'Extraction',
t:'Who, according to the source, replaced Byrnes as US Secretary of State in 1947?',
opts:['Dean Acheson','George Marshall','Harry Truman','George Kennan'],
c:1,fb:'Direct extraction: "with Byrnes out and George Marshall in as the Secretary of State." Acheson was Deputy Secretary. Truman was President. Kennan was a diplomat. 1-mark questions require precision: find the exact answer.'},

{id:'q9',src:'1C',num:'1.3.2',m:2,t:50,lv:1,ll:'Extraction',
t:'Identify TWO reasons the anti-communist governments of Turkey and Greece put forward for USA\'s help.',
multi:true,mx:2,
opts:['They were under severe Soviet pressure','They could not guarantee their own survival','They wanted to join the European Recovery Programme','They needed assistance rebuilding infrastructure after wartime damage'],
c:[0,1],fb:'Both from the source: (1) "under severe Soviet pressure" and (2) "could not guarantee their own survival." Options C and D are not stated in this source. Multi-select = find MULTIPLE distinct pieces of evidence.'},

{id:'q10',src:'1C',num:'1.3.3',m:4,t:100,lv:2,ll:'Interpretation',
t:'Comment on why Acheson regarded the Congressional session on aid to Turkey and Greece as \'Armageddon\'.',
h:'"Armageddon" = the final, apocalyptic battle. Why would Acheson use such extreme language about a meeting?',
opts:[
'Because Marshall\'s initial appeal had failed to convince Congress, and Acheson believed that if the US did not act, communist expansion would destroy freedom and economic recovery across three continents, making this a decisive, existential moment for the entire free world',
'Because the US administration was deeply divided between isolationists who wanted to avoid European entanglements and interventionists who saw communist expansion as America\'s problem, and the outcome would determine US foreign policy for decades',
'Because Congress was primarily concerned about the enormous financial cost of foreign aid during a period of domestic economic pressure, and Acheson needed to reframe the issue from economics to national security',
'Because Britain had just announced it could no longer afford to support Greece and Turkey, leaving only the United States capable of acting, and Congress had not yet accepted this new global role'
],c:0,fb:'Acheson used "Armageddon" because the stakes were civilisational in his view. Marshall spoke first and FAILED: "legislators seemed unmoved." Then Acheson reframed: not a local problem but an existential crisis. If Greece falls → communism infects three continents → freedom destroyed. The language reveals the Cold War mentality, where every regional conflict was seen through a global, apocalyptic lens.'},

{id:'q11',src:'1C',num:'1.3.4',m:2,t:50,lv:1,ll:'Extraction',
t:'Give TWO reasons Acheson advanced when he changed the terms of the debate.',
multi:true,mx:2,
opts:['The Soviets were directly pressuring Turkey and Greece','If Greece fell to communism, the infection would spread to Africa, Asia Minor, and Europe across three continents','The United States had a moral obligation to spread democracy worldwide','American military bases in Greece were vital for national security'],
c:[0,1],fb:'Acheson\'s two key arguments: (1) direct Soviet pressure on Greece and Turkey, and (2) a domino/contagion effect across three continents. Options C and D are not stated in the source. Notice how Acheson escalates from regional to global. That\'s the rhetorical move that convinced Congress.'},

// Compare
{id:'q12',src:'compare',num:'1.4',m:4,t:120,lv:3,ll:'Comparison',
t:'Comment on how the information in Source 1A supports the evidence in Source 1C regarding the spread of communism in Europe after the Second World War.',
h:'You need TWO developed comparison points (2×2). Show how the sources CONNECT, not just what each one says separately.',
opts:[
'Both sources present communism as a growing threat: Source 1A (1946) identifies countries already under Soviet control, warning of unlimited expansion, while Source 1C (1947) shows this threat materialising as Greece and Turkey came under direct Soviet pressure, confirming the escalating pattern Churchill described. Additionally, both sources frame communist influence as spreading beyond Eastern Europe: Churchill warns of control "from Moscow" and Acheson warns of "infection" reaching three continents',
'Both sources describe Western concern about communism, but they actually contradict each other on a key point: Source 1A (1946) presents the threat as contained behind a clear dividing line, the Iron Curtain, with defined boundaries from Stettin to Trieste, while Source 1C (1947) presents the threat as spreading beyond those boundaries into Greece, Turkey and potentially three continents. This suggests Churchill\'s Iron Curtain metaphor was misleading because it implied a stable border when the threat was actually fluid',
'Source 1A provides the general warning about Soviet expansion, but Source 1C reveals that the real catalyst for US action was the financial pressure on Congress, not the ideological threat Churchill described, suggesting different motivations for Western responses',
'Both sources express alarm about communism, but they approach it from fundamentally different angles: Source 1A focuses on the political dimension (communist parties gaining totalitarian control in Eastern Europe), while Source 1C frames the threat primarily in economic and strategic terms: the risk to economic recovery across three continents. Since one emphasises political takeover and the other economic collapse, they describe parallel but separate Western concerns rather than directly supporting each other'
],c:0,fb:'Source comparison = finding CONNECTIONS between sources. Point 1: Source 1A identifies the problem (Soviet control over Eastern Europe); Source 1C shows it getting worse (pressure on Greece and Turkey). The threat Churchill warned about in 1946 is confirmed as escalating in 1947. Point 2: Both use contagion language, with Churchill\'s "expansive tendencies" and Acheson\'s "infection" framing communism as something that spreads and grows. Together, they show an escalating crisis. The best comparison answers show sources BUILDING ON each other.'},

// Source 1D
{id:'q13',src:'1D',num:'1.5.1',m:2,t:50,lv:1,ll:'Extraction',
t:'Name TWO East European countries that showed keen interest in the European Recovery Programme.',
multi:true,mx:2,
opts:['Czechoslovakia','France','Poland','Bulgaria'],
c:[0,2],fb:'Source: "East European countries, like Czechoslovakia and Poland, expressed keen interest." France is Western European. Bulgaria is not mentioned. These countries\' interest matters historically: it shows Soviet control was not yet total.'},

{id:'q14',src:'1D',num:'1.5.2',m:1,t:30,lv:1,ll:'Extraction',
t:'Why did Stalin warn the Czechs and others against participating in the European Recovery Programme?',
opts:['He believed the programme would weaken socialist economic systems','He saw the American offer as a challenge to his sphere of influence','The Czechs had not consulted him before expressing interest','The programme required participants to hold free elections'],
c:1,fb:'Direct extraction: "Stalin saw the American offer as a challenge to his sphere of influence." This is about power and control, not economics, consultation, or elections.'},

{id:'q15',src:'1D',num:'1.5.3',m:2,t:70,lv:2,ll:'Concept',
t:'Explain the concept <em>Stalinisation</em> in the context of the Cold War in Eastern Europe.',
opts:[
'The transfer of Soviet industrial machinery, scientific expertise and technical advisers into Eastern European factories after 1945 in order to rebuild the war-damaged economies of the region along modern lines, without altering the existing political systems of the countries involved',
'The implementation of Stalin\'s model of dictatorship across Eastern Europe: banning all parties except communists, purging those independent of Moscow, state control over agriculture and industry, abolishing civil and political liberties',
'The process by which Eastern European governments freely chose to adopt Soviet-style central economic planning after observing the apparent industrial successes of the USSR\'s pre-war Five Year Plans, while otherwise retaining their own constitutional and political systems',
'The voluntary embrace of Soviet political institutions by Eastern European populations who openly admired Stalin\'s wartime leadership against Nazi Germany and chose, through free post-war elections, to model their new states on the Soviet Union'
],c:1,fb:'The source defines this directly: "All but communists were proscribed, those independent of Moscow were purged, agriculture and heavy industry were brought under state control, civil and political liberties systematically abolished." Stalinisation was FORCED imposition, not voluntary adoption (option D). "In the context of" = connect your definition to the specific historical situation.'},

{id:'q16',src:'1D',num:'1.5.4',m:4,t:100,lv:2,ll:'Interpretation',
t:'Using the source and your own knowledge, comment on how the Czech coup and Berlin Crisis \'damaged the Soviet image in Europe\'.',
h:'2×2: TWO developed points using both source evidence and own knowledge.',
opts:[
'The Czech coup (1948) showed the USSR would crush even partial independence: Czechoslovakia had shown interest in the Marshall Plan and was punished with forced communist takeover. The Berlin Crisis revealed Soviet willingness to blockade civilians. Both events damaged Soviet credibility even in France, where the Communist Party was strong, while Marshall Aid offered a positive American alternative, making the contrast between Soviet coercion and Western economic generosity increasingly stark',
'The Czech coup (1948) and the Berlin Crisis actually strengthened the Soviet image in Europe by showing Stalin\'s firm leadership and willingness to defend the socialist bloc. Even the French Communist Party, holding about a quarter of the vote, used these events to rally supporters, while Marshall Aid was widely dismissed across the continent as American economic imperialism','The Czech coup (1948) and Berlin Crisis damaged the Soviet image only briefly because Western European publics were absorbed in post-war recovery and showed little interest in events in Prague or Berlin. Even in France, where the Communist Party held about a quarter of the vote, opinion shifted only among elites while Marshall Aid had limited political effect on ordinary voters','The Czech coup (1948) showed the USSR would tolerate even partial independence, since Czechoslovakia, despite its Marshall Plan interest, was rewarded with closer partnership, while the Berlin Crisis demonstrated Stalin\'s restraint in allowing the Western airlift to proceed. Both events enhanced Soviet credibility even in France, where the Communist Party was strong, and made Marshall Aid look unnecessary'
],c:0,fb:'Two impacts: (1) Czech coup = USSR will use force even against countries trying to engage with the West (Marshall Plan interest). (2) Berlin Crisis = Soviet willingness to blockade civilians. The source adds: damage "even in France" where communists were strong. Marshall Aid "winning hearts and minds" = positive contrast. The best answers combine source evidence (France, Marshall Aid) with own knowledge (specific events in Czechoslovakia and Berlin).'},

// Paragraph builder
{id:'q17',src:'para',num:'1.6a',m:2,t:75,lv:3,ll:'Synthesis',
t:'STEP 1, TOPIC SENTENCE: Which opening best addresses the question?',
opts:[
'The spread of communism in Europe after 1945 created escalating tensions between the USA and USSR, as Soviet expansion into Eastern Europe provoked Western alarm and a direct American policy of containment.',
'The Cold War between the USA and the USSR lasted from the end of the Second World War until the collapse of the Soviet Union in 1991, and it involved many different international events across the world.',
'Winston Churchill delivered his famous Iron Curtain speech at Westminster College in Fulton, Missouri on 5 March 1946, warning the American public about the danger of Soviet expansion into Eastern Europe.',
'The spread of communism into Eastern Europe after 1945 was provoked by the USA, because American economic pressure and Cold War rhetoric forced Stalin to tighten control over the region as a purely defensive measure rather than as deliberate expansion.'
],c:0,fb:'A topic sentence must: (1) address the question directly, (2) identify cause and effect, (3) preview your argument. Option A does all three. Option B is factual but doesn\'t address HOW communism caused tensions. Option C is a detail, not a thesis. Option D is so vague it could introduce any essay.'},

{id:'q18',src:'para',num:'1.6b',m:2,t:75,lv:3,ll:'Synthesis',
t:'STEP 2, SOURCE EVIDENCE: Which combination best supports your topic sentence?',
opts:[
'Churchill warned that an Iron Curtain divided Europe with cities from Warsaw to Sofia under Soviet control (Source 1A), and Acheson argued Soviet pressure on Greece and Turkey threatened the entire free world (Source 1C)',
'George Marshall replaced Byrnes as US Secretary of State in early 1947 (Source 1C), and the Marshall Plan provided around $13 billion of American aid to the countries of Western Europe between 1948 and 1951 (Source 1D)',
'Czechoslovakia and Poland expressed keen interest in joining the European Recovery Programme (Source 1D), and Athens alone was free to decide its future at an election under British, American and French observation (Source 1A)',
'Stalin warned the Czechs and others against participating in the Marshall Plan and withdrew the Soviet delegation from Paris (Source 1D), and Dean Acheson described the closed-door meeting between Truman officials and senior members of Congress as \'Armageddon\' (Source 1C)'
],c:0,fb:'Your evidence must DIRECTLY support the topic sentence. Option A combines Churchill\'s alarm at expansion with Acheson\'s existential warning, both proving that Soviet expansion caused Western panic. The other options contain accurate facts but don\'t directly demonstrate the cause-effect relationship your topic sentence claims.'},

{id:'q19',src:'para',num:'1.6c',m:2,t:75,lv:3,ll:'Synthesis',
t:'STEP 3, OWN KNOWLEDGE: Which extends the argument beyond the sources?',
opts:[
'The USA responded with the Truman Doctrine (1947) providing military aid to resist communism, and the Marshall Plan offering economic recovery, confirming that Soviet expansion directly triggered American counter-action, deepening the Cold War divide.',
'Stalin created the Cominform in 1947 to coordinate foreign communist parties and tightened control over Eastern Europe through Stalinisation, proving that Soviet expansion was driven by ideology alone and would have proceeded at the same pace regardless of any Western policy choices.',
'The Berlin Blockade (1948-49) was Stalin\'s attempt to force the Western allies out of West Berlin by cutting road and rail access, but the US-led airlift supplied the city for almost a year, deepening the permanent division of Germany into two hostile states.',
'Churchill\'s Iron Curtain speech was deliberately delivered in Missouri rather than Britain because he wanted to convince American voters and Congress that Soviet expansion required US economic and military action, proving the speech was domestic US politics rather than analysis.'
],c:0,fb:'Own knowledge must ADVANCE your argument. Option A shows the mechanism: Soviet expansion → American containment → deeper tensions. It proves the cause-effect chain your paragraph argues for. The other options are true but don\'t connect to the question.'},

{id:'q20',src:'para',num:'1.6d',m:2,t:75,lv:3,ll:'Synthesis',
t:'STEP 4, CONCLUSION: Which ties the paragraph together?',
opts:[
'Therefore, the spread of communism after 1945 directly caused Cold War tensions by creating a self-reinforcing cycle: Soviet expansion provoked Western containment, which deepened the ideological divide and entrenched two hostile blocs across Europe.',
'In conclusion, the spread of communism created tensions mainly because the USA and USSR held incompatible ideologies (capitalism versus communism) and neither superpower was willing to compromise on its vision for post-war Europe, making confrontation inevitable once the common enemy was defeated.',
'Ultimately, Cold War tensions were inevitable because the wartime Grand Alliance had only ever been a temporary arrangement of convenience based on defeating Nazi Germany, so once that shared threat was removed in 1945 the deep underlying differences between the superpowers made confrontation unavoidable.',
'In summary, while Soviet expansion played a significant role in creating Cold War tensions, American containment policies (the Truman Doctrine and the Marshall Plan) also escalated the confrontation by forcing the USSR into a defensive posture, meaning both superpowers bear equal responsibility for the division of Europe.'
],c:0,fb:'A strong conclusion SYNTHESISES; it doesn\'t just repeat. Option A names the cause (expansion), the mechanism (containment cycle), and the outcome (hostile blocs). It shows understanding of the underlying dynamics. Option B is too simplistic. Option C is descriptive. Option D is vague and doesn\'t address the specific question.'}
];

// MTA data
const MTA_ANSWERS=[
{label:'Answer A',
text:'After 1945, Soviet expansion in Eastern Europe caused growing alarm in the West. Churchill warned in his Iron Curtain speech that communist control was spreading across the continent, with major cities falling under Moscow\'s influence (Source 1A). The USA responded by providing aid to countries threatened by communism. Acheson argued that if Greece fell, communism would spread further (Source 1C). Stalin retaliated by creating the Cominform and blocking Eastern European countries from accepting Marshall Aid (Source 1D). These actions by both sides led to increasing Cold War tensions between the superpowers.',
expLv:0,expM:'?–5',
crit:[
{q:'Does it have a clear topic sentence addressing the question?',cor:'partial',exp:'The opening addresses the topic (Soviet expansion causing alarm) but doesn\'t clearly state HOW this led to tensions or preview a specific argument. It doesn\'t address HOW communism spread or WHY it caused tensions.'},
{q:'Does it use specific evidence from the sources?',cor:'yes',exp:'It references Sources 1A, 1C and 1D with some relevant details. However, the evidence is presented as a sequence of separate facts rather than being analytically woven into a causal argument.'},
{q:'Does it include own knowledge beyond the sources?',cor:'partial',exp:'It mentions \"providing aid to countries threatened by communism\" which gestures toward the Truman Doctrine, but doesn\'t name or develop it specifically enough to count as fully developed own knowledge.'},
{q:'Does it explain WHY (analysis), not just WHAT (description)?',cor:'partial',exp:'It describes a sequence (expansion, alarm, response, retaliation) but doesn\'t fully explain the causal mechanism. It says WHAT each side did without deeply explaining WHY each action provoked the next. It doesn\'t explain the mechanism: HOW did expansion cause tensions?'},
{q:'Does it have a concluding sentence that synthesises?',cor:'partial',exp:'The final sentence returns to the question but is generic: it states tensions increased without explaining HOW they became entrenched or naming the specific mechanism. It doesn\'t link back to the question or draw together the evidence.'},
{q:'Is it a coherent paragraph, not a list of disconnected sentences?',cor:'partial',exp:'It flows better than a pure list; there\'s a rough chronological sequence. But the connections between sentences are weak, with each point stated rather than linked through causal analysis.'}
]},
{label:'Answer B',
text:'The spread of communism in Europe after 1945 directly caused Cold War tensions by triggering an escalating cycle of Soviet expansion and American containment. Churchill\'s Iron Curtain speech (1946) exposed the scale of Soviet control, warning that cities from Warsaw to Sofia were under increasing domination and that communist parties had been elevated far beyond their genuine support (Source 1A). By 1947, the threat had intensified. Acheson convinced Congress that Soviet pressure on Greece and Turkey endangered freedom across three continents (Source 1C). The USA responded with the Truman Doctrine, providing military and economic aid to resist communist expansion. In turn, Stalin rejected the Marshall Plan as a threat to his sphere of influence, created the Cominform, and imposed Stalinisation across Eastern Europe (Source 1D). This cycle of action and reaction entrenched two hostile blocs and made Cold War confrontation unavoidable.',
expLv:0,expM:'?–8',
crit:[
{q:'Does it have a clear topic sentence addressing the question?',cor:'yes',exp:'Opens by directly addressing the question, identifying causation (each side provoking the other), and previewing the argument.'},
{q:'Does it use specific evidence from the sources?',cor:'yes',exp:'References Sources 1A, 1C, and 1D with specific details: Churchill\'s cities, Acheson\'s three-continent argument, Cominform/Stalinisation.'},
{q:'Does it include own knowledge beyond the sources?',cor:'yes',exp:'The Truman Doctrine is own knowledge; it\'s not detailed in the sources used. It shows the American response mechanism.'},
{q:'Does it explain WHY (analysis), not just WHAT (description)?',cor:'yes',exp:'It explains causation: expansion → alarm → containment → retaliation → deeper division. This is analytical, not descriptive.'},
{q:'Does it have a concluding sentence that synthesises?',cor:'yes',exp:'Introduces "self-reinforcing cycle" and links back to the question, showing how tensions were entrenched, not just listing events.'},
{q:'Is it a coherent paragraph, not a list of disconnected sentences?',cor:'yes',exp:'Each sentence builds on the previous one. Logical flow: problem → escalation → response → consequence.'}
]}
];

// ═══ STATE ═══
let ans={},curQ=0,totM=0,earM=0;
QS.forEach(q=>{totM+=q.m});
let mtaState={};
let learnerName='';

// ═══ OPTION SHUFFLE (kills position bias: correct answer no longer always A/B) ═══
const ORIG_OPTS=QS.map(q=>({opts:q.opts.slice(),c:Array.isArray(q.c)?q.c.slice():q.c}));
let optPerms={};
const PERM_KEY='cwo-perms-v1';
function loadPerms(){try{const s=localStorage.getItem(PERM_KEY);if(s)optPerms=JSON.parse(s)||{}}catch(e){optPerms={}}}
function savePerms(){try{localStorage.setItem(PERM_KEY,JSON.stringify(optPerms))}catch(e){}}
function applyShuffle(){
  QS.forEach((q,qi)=>{
    const orig=ORIG_OPTS[qi];
    if(!orig.opts||orig.opts.length<2)return;
    let perm=optPerms[q.id];
    if(!perm||perm.length!==orig.opts.length){
      perm=orig.opts.map((_,i)=>i);
      for(let i=perm.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [perm[i],perm[j]]=[perm[j],perm[i]];
      }
      optPerms[q.id]=perm;
    }
    const oldToNew={};perm.forEach((oi,ni)=>{oldToNew[oi]=ni});
    q.opts=perm.map(i=>orig.opts[i]);
    if(Array.isArray(orig.c)){
      q.c=orig.c.map(i=>oldToNew[i]).sort((a,b)=>a-b);
    }else{
      q.c=oldToNew[orig.c];
    }
  });
  savePerms();
}
loadPerms();applyShuffle();
const NAME_KEY='cwo-name';
function firstName(){return (learnerName||'').trim().split(/\s+/)[0]||'';}
function escHtml(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]});}

// ═══ RENDER ═══

// Add skill guide button for every question type
var SKILL_MAP={
  'Extraction':{modal:'extraction-modal',text:'Not sure how to find the answer? Tap here for extraction tips'},
  'Concept':{modal:'concept-modal',text:'Need help defining concepts in your own words? Tap for guidance'},
  'Interpretation':{modal:'interpretation-modal',text:'Struggling to explain WHY, not just WHAT? Tap for interpretation tips'},
  'Analysis':{modal:'analysis-modal',text:'Not sure how to combine source + own knowledge? Tap for help'},
  'Reliability':{modal:'reliability-modal',text:'Not sure how to evaluate reliability? Tap for a step-by-step guide'},
  'Comparison':{modal:'comparison-modal',text:'Need help comparing sources? Tap for comparison tips'},
  'Synthesis':{modal:'synthesis-modal',text:'Need help building your paragraph? Tap for the step-by-step method'}
};
// ═══ SKILL GUIDE MODALS ═══
// Source: /History/G12 Skills/index.html SKILLS array; content adapted into modal markup
const SKILL_DATA={
  extraction:{title:'Extraction',sub:'Finding information in sources',
    intro:'Extraction questions ask you to <strong>find specific information that is directly stated in the source</strong>. The answer is IN the text, with no interpretation needed.',
    steps:[
      ['Read the question first, then the source.','Underline the KEY WORDS. What exactly are you being asked to find? A person? A reason? A city? A date?'],
      ['Scan the source for those key words','or their synonyms. The answer is usually within one or two sentences of where the key words appear.'],
      ['Check your answer is actually IN the source.','If you can\'t point to the exact sentence, you\'re probably interpreting rather than extracting.'],
      ['Count carefully.','If the question says "identify TWO reasons," give exactly two. Missing one loses marks; adding extras wastes time.']
    ],
    example:'<strong>Q:</strong> "Who replaced Byrnes as Secretary of State?" → Scan for "Byrnes" → "George Marshall" = 1 mark.',
    warn:'Using your own knowledge instead of the source. Giving information that\'s true but not in THIS source. Wrong count of points.'},
  concept:{title:'Concept Definition',sub:'Explaining terms in your own words',
    intro:'"Define the concept… in your own words" tests whether you understand a term well enough to explain it <strong>without copying the source</strong>.',
    steps:[
      ['Identify what KIND of thing it is.','Policy? Metaphor? Ideology? Process? Place it in a category first: "The Iron Curtain was a metaphor…"'],
      ['Explain what it means, not just what it is.','Say what it involved, who it affected, why it mattered. A definition that could apply to anything is too vague.'],
      ['Connect to the historical context','when the question says "in the context of." Link to the specific period, event, or situation.']
    ],
    example:'<strong>Iron Curtain:</strong> A metaphor (category) for the dividing line separating communist Eastern Europe from capitalist Western Europe (meaning), after the USSR extended its sphere of influence post-1945 (context).',
    warn:'Repeating the source word-for-word. Vague definitions without context. Confusing similar concepts (Iron Curtain vs Berlin Wall).'},
  interpretation:{title:'Interpretation',sub:'Explaining what evidence means and why it matters',
    intro:'Interpretation questions ask you to go <strong>beyond what the source says</strong> to explain what it <strong>means</strong>, what it <strong>implies</strong>, or <strong>why it matters</strong>.',
    steps:[
      ['Start with what the source SAYS, then explain what it MEANS.','Use bridge phrases: "This suggests…" / "This implies…" / "The significance is…"'],
      ['Ask WHY, not just WHAT.','Why did it happen? Why does it matter? What were the consequences?'],
      ['Consider language and purpose.','"Armageddon" is much stronger than "important meeting". What does that word choice reveal?'],
      ['For "comment on" questions:','Interpret + explain significance. Connect to the bigger historical picture.']
    ],
    example:'<strong>Weak:</strong> "Acheson called it \'Armageddon.\'" (just repeats source). <strong>Strong:</strong> Acheson used apocalyptic language because he saw the decision as existential, revealing the Cold War mentality where every decision was framed as good vs evil.',
    warn:'Repeating the source without explaining meaning. If every sentence starts "The source says…" you\'re describing, not interpreting.'},
  analysis:{title:'Source + Own Knowledge',sub:'Combining evidence with what you\'ve studied',
    intro:'These questions require <strong>two things</strong>: evidence from the source AND additional information from your own studies. You need both.',
    steps:[
      ['Identify what the SOURCE tells you.','What evidence or clues does it provide? Start your answer by referring to the source.'],
      ['Add what you KNOW from your studies.','Additional facts, context, or background that helps explain what the source shows.'],
      ['LINK them together.','Show how your knowledge EXPLAINS what the source shows, or how the source CONFIRMS what you\'ve studied.']
    ],
    example:'<strong>Source:</strong> Cartoon shows Greece/Turkey outside the Soviet bloc. <strong>Own K:</strong> The Truman Doctrine (1947) provided US aid to these countries. <strong>Link:</strong> The source shows the outcome; my knowledge explains the cause.',
    warn:'Using only the source (no own knowledge). Using only own knowledge (no source). Listing both without connecting them.'},
  reliability:{title:'Reliability & Bias',sub:'Evaluating whether you can trust a source',
    intro:'Reliability questions ask: <strong>can a historian trust this source?</strong> The answer is almost never simply "yes" or "no." Weigh strengths against limitations.',
    steps:[
      ['WHO created it?','First-hand knowledge? Insider access? Eyewitness? Politician with an agenda?'],
      ['WHEN was it created?','During the events (immediate but less reflective) or after (more perspective, but shaped by hindsight)?'],
      ['WHY was it created?','To inform? Persuade? Justify? Rally support? Purpose shapes content.'],
      ['WHAT perspective does it represent?','Every source has a perspective. That doesn\'t make it unreliable, but a historian needs to be aware of it.']
    ],
    example:'<strong>Churchill\'s Iron Curtain speech:</strong> Reliable because he had first-hand experience at Yalta/Potsdam (WHO) and the speech was contemporaneous (WHEN). However, his anti-communist stance and goal of rallying US support (WHY) mean the language may overstate the threat.',
    warn:'"Reliable because it\'s a primary source": primary sources can be biased. "Unreliable because biased": all sources have a perspective. Always weigh both sides.'},
  comparison:{title:'Source Comparison',sub:'Finding connections between two sources',
    intro:'Comparison questions ask you to find <strong>connections between sources</strong>. How does one support, contradict, or extend another? Discuss BOTH together, not separately.',
    steps:[
      ['Identify the THEME that connects them.','What topic or idea do both sources address? This is your bridge.'],
      ['Find specific EVIDENCE in each source','that relates to this shared theme. Concrete details from both, not vague summaries.'],
      ['Explain the CONNECTION.','Use linking phrases: "Source A states… and this is supported by Source B which shows…" / "Together, these sources demonstrate…"'],
      ['For 4-mark questions:','TWO comparison points, each with evidence from both sources and an explanation of the connection. 2×2 = 4 marks.']
    ],
    example:'<strong>Theme:</strong> Both address Soviet expansion. <strong>1A:</strong> Churchill warns of Iron Curtain from Stettin to Trieste. <strong>1C:</strong> Acheson shows the threat materialising in Greece/Turkey. <strong>Link:</strong> 1C confirms and escalates the warning Churchill made in 1A.',
    warn:'Describing each source separately without connections. Saying "the sources are similar" without explaining HOW. Comparing authors instead of content.'},
  synthesis:{title:'Paragraph Writing',sub:'Synthesising sources + own knowledge into an argument',
    intro:'The paragraph question tests <strong>synthesis</strong>: weaving source evidence and your own knowledge into a coherent argument. It\'s assessed holistically.',
    steps:[
      ['TOPIC SENTENCE:','Address the question directly in your first sentence. State your argument. Don\'t start with background; start with your answer.'],
      ['SOURCE EVIDENCE:','Use specific evidence from at least TWO sources. Reference them by number (Source 1A, Source 1C).'],
      ['OWN KNOWLEDGE:','Add at least ONE piece of information not in the sources. It must support your argument.'],
      ['CONCLUDING SENTENCE:','Return to the question. Name the mechanism: HOW and WHY, not just WHAT.']
    ],
    example:'<strong>L3 (6–8):</strong> Clear topic sentence → specific source evidence woven in → own knowledge that extends the argument → conclusion that synthesises (shows HOW and WHY).',
    warn:'A list of disconnected facts with no topic sentence. Naming sources without using their evidence. Missing own knowledge.'}
};

function injectSkillModals(){
  const host=document.getElementById('modals');
  if(!host||host.children.length)return;
  const slugFromMap={};
  Object.keys(SKILL_MAP).forEach(k=>{
    const slug=k.toLowerCase();
    const id=SKILL_MAP[k].modal;
    const dataKey=slug==='synthesis'?'synthesis':slug;
    const d=SKILL_DATA[dataKey];if(!d)return;
    const stepsHtml=d.steps.map((s,i)=>'<div class="skill-step"><span class="skill-step-num">'+(i+1)+'</span><div class="skill-step-text"><strong>'+s[0]+'</strong> '+s[1]+'</div></div>').join('');
    const html='<div class="modal-overlay" id="'+id+'" onclick="closeSkillModal(event,\''+id+'\')">'+
      '<div class="modal" onclick="event.stopPropagation()">'+
        '<div class="modal-hd"><span class="modal-title">'+d.title+'</span><button class="modal-close" aria-label="Close" onclick="closeSkillModal(null,\''+id+'\')">×</button></div>'+
        '<div class="modal-body">'+
          '<h3>'+d.sub+'</h3>'+
          '<p>'+d.intro+'</p>'+
          stepsHtml+
          '<div class="skill-example"><strong>Example.</strong> '+d.example+'</div>'+
          '<div class="skill-warn"><strong>Common mistakes.</strong> '+d.warn+'</div>'+
        '</div>'+
      '</div></div>';
    host.insertAdjacentHTML('beforeend',html);
  });
}
function closeSkillModal(e,id){
  if(e&&e.target!==e.currentTarget)return;
  const m=document.getElementById(id);if(m)m.classList.remove('show');
}
window.closeSkillModal=closeSkillModal;

function addSkillHint(){
  const q=QS[curQ];if(!q)return;
  var skill=SKILL_MAP[q.ll];if(!skill)return;
  injectSkillModals();
  // Find or create hint area
  var hintDiv=document.querySelector('.qp-hint');
  var panel=document.querySelector('.q-panel');
  if(!hintDiv){
    // Create a hint div after qp-text
    var qt=panel.querySelector('.qp-text');
    hintDiv=document.createElement('div');
    hintDiv.className='qp-hint';
    hintDiv.innerHTML='';
    qt.after(hintDiv);
  }
  if(!hintDiv.querySelector('.hint-btn')){
    var btn=document.createElement('button');
    btn.className='hint-btn';
    btn.onclick=function(e){e.stopPropagation();document.getElementById(skill.modal).classList.add('show')};
    btn.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> '+skill.text+' <span class="hint-pulse"></span>';
    hintDiv.appendChild(btn);
  }
}

// ═══ TIMER ═══
var qStartTime=0, totalStartTime=Date.now(), qTimerInterval=null, totalTimerInterval=null;
var questionTimes={}; // track actual time per question

function startQTimer(){
  qStartTime=Date.now();
  if(qTimerInterval)clearInterval(qTimerInterval);
  qTimerInterval=setInterval(updateQTimer,1000);
  updateQTimer();
}

function updateQTimer(){
  const q=QS[curQ];if(!q)return;
  const elapsed=Math.floor((Date.now()-qStartTime)/1000);
  const recommended=Math.max(30,(q.m||1)*45);
  const remaining=recommended-elapsed;
  const display=document.getElementById('q-timer');
  if(!display)return;
  
  if(remaining>0){
    const m=Math.floor(remaining/60);
    const s=remaining%60;
    display.textContent=m+':'+(s<10?'0':'')+s;
    if(remaining>recommended*0.3){
      display.className='timer-display timer-ok';
    } else {
      display.className='timer-display timer-warn';
    }
  } else {
    const over=Math.abs(remaining);
    const m=Math.floor(over/60);
    const s=over%60;
    display.textContent='+'+m+':'+(s<10?'0':'')+s;
    display.className='timer-display timer-over';
  }
}

function stopQTimer(){
  if(qTimerInterval){clearInterval(qTimerInterval);qTimerInterval=null}
  const q=QS[curQ];
  if(q)questionTimes[q.id]=Math.floor((Date.now()-qStartTime)/1000);
}

function startTotalTimer(){
  totalStartTime=Date.now();
  totalTimerInterval=setInterval(updateTotalTimer,1000);
}

function updateTotalTimer(){
  const elapsed=Math.floor((Date.now()-totalStartTime)/1000);
  const m=Math.floor(elapsed/60);
  const s=elapsed%60;
  const display=document.getElementById('total-timer');
  if(display)display.textContent=(m<10?'0':'')+m+':'+(s<10?'0':'')+s;
}

function getTotalTime(){
  const elapsed=Math.floor((Date.now()-totalStartTime)/1000);
  const m=Math.floor(elapsed/60);
  const s=elapsed%60;
  return (m<10?'0':'')+m+':'+(s<10?'0':'')+s;
}


function beginExam(){
  // capture name from input (required ≥2 chars)
  const inp=document.getElementById('learner-name');
  if(inp){
    const v=(inp.value||'').trim();
    if(v.length<2){inp.focus();return;}
    learnerName=v;
    try{localStorage.setItem(NAME_KEY,learnerName);}catch(e){}
  }
  document.getElementById('start-overlay').style.display='none';
  startTotalTimer();
  startQTimer();
}
function onNameInput(){
  const inp=document.getElementById('learner-name');
  const btn=document.getElementById('begin-btn');
  if(!inp||!btn)return;
  btn.disabled=(inp.value||'').trim().length<2;
}
window.onNameInput=onNameInput;

function render(){
  const q=QS[curQ];
  const s=SRC[q.src];
  const L='ABCDE';
  const isLast=curQ===QS.length-1;
  const isFirst=curQ===0;

  // Update top bar
  document.getElementById('tb-sec').textContent=s.label;
  document.getElementById('tb-qn').textContent=curQ+1;
  document.getElementById('tb-qt').textContent=QS.length;
  const pct=Math.round(((curQ)/QS.length)*100);
  document.getElementById('tb-fill').style.width=pct+'%';

  let html=`
  
  <div class="source-panel">
    <div class="sp-header"><span class="sp-label">${s.label}</span><span class="sp-type">${s.type}</span></div>
    <button class="sp-toggle" onclick="toggleSource(this)">▾ Hide source to focus on the question</button>
    <div class="sp-collapsible">${s.html}
    <div class="sp-attr">${s.attr}</div></div>
  </div>
  <div class="q-panel">
    <div class="qp-meta">
      <span class="qp-num">Q${q.num}</span>
      <span class="cc c${q.lv}">${q.ll}</span>
      <span class="qp-marks">${q.m} mark${q.m>1?'s':''}</span>
    </div>
    <div class="qp-text">${q.t}</div>
    ${q.h?`<div class="qp-hint">${q.h}</div>`:''}
    <div class="ol" id="opts">${q.opts.map((o,i)=>`<button class="ob${ans[q.id]?.done?(q.multi?(q.c.includes(i)?' ok':((ans[q.id].sel||[]).includes(i)?' no':' dim')):(i===q.c?' ok':(i===ans[q.id].sel?' no':' dim'))):((ans[q.id]?.sel!=null&&!q.multi&&ans[q.id].sel===i)?' sel':(q.multi&&(ans[q.id]?.sel||[]).includes(i)?' sel':''))}" data-i="${i}" ${ans[q.id]?.done?'disabled':''} onclick="${q.multi?`tmm(${i},${q.mx})`:`sll(${i})`}"><span class="ol2">${L[i]}.</span><span style="flex:1">${o}</span><span class="om">${ans[q.id]?.done?(q.multi?(q.c.includes(i)?'✓':((ans[q.id].sel||[]).includes(i)?'✗':'')):(i===q.c?'✓':(i===ans[q.id].sel?'✗':'')))  :''}</span></button>`).join('')}</div>
    ${!ans[q.id]?.done?`<div style="text-align:right;margin-top:.8rem"><button class="bs" id="sub-btn" onclick="submitQ()" ${ans[q.id]?.sel==null||(q.multi&&(!ans[q.id]?.sel||ans[q.id].sel.length<q.mx))?'disabled':''}>Submit</button></div>`:''}
    <div class="fb${ans[q.id]?.done?' show':''}${ans[q.id]?.ok?' fbg':''}${ans[q.id]?.done&&!ans[q.id]?.ok?' fbb':''}" id="fb" aria-live="polite" role="status">${ans[q.id]?.done?`<div class="fbl ${ans[q.id].ok?'flg':'flb'}">${ans[q.id].ok?'✓ Correct, '+q.m+' mark'+(q.m>1?'s':'')+' earned':'✗ Not quite. 0 marks'}</div><div>${q.fb}</div>`:''}</div>
    <div class="nav-row">
      <button class="b2" onclick="prev()" ${isFirst?'disabled':''}>← Previous</button>
      ${isLast?`<button class="bs" onclick="showResults()">View Results →</button>`:`<button class="bs" onclick="next()">Next →</button>`}
    </div>
  </div>`;

  document.getElementById('app').innerHTML=html;

  addSkillHint();
  // Mobile: start collapsed
  if(window.innerWidth<600){
    const col=document.querySelector('.sp-collapsible');
    if(col&&!ans[q.id]?.done)col.style.display='none';
  }
  // Desktop: restore source panel scroll position between questions
  if(window.innerWidth>=900){
    const col=document.querySelector('.sp-collapsible');
    if(col && typeof __srcScroll==='number') col.scrollTop=__srcScroll;
    if(col){col.addEventListener('scroll',function(){__srcScroll=col.scrollTop});}
  }
  // restart per-question timer on every render that shows a new question
  if(__lastRenderedQ!==curQ){
    if(__lastRenderedQ!=null){
      // accumulate time into perQuestionTime
      const prevQ=QS[__lastRenderedQ];
      if(prevQ){
        const dt=Math.floor((Date.now()-qStartTime)/1000);
        perQuestionTime[prevQ.id]=(perQuestionTime[prevQ.id]||0)+dt;
      }
    }
    __lastRenderedQ=curQ;
    qStartTime=Date.now();
  }
  saveState();
}
var __lastRenderedQ=null;
var __srcScroll=0;
var perQuestionTime={};

function sll(i){const q=QS[curQ];if(ans[q.id]?.done)return;ans[q.id]=ans[q.id]||{};ans[q.id].sel=i;render()}
function tmm(i,mx){const q=QS[curQ];if(ans[q.id]?.done)return;ans[q.id]=ans[q.id]||{};ans[q.id].sel=ans[q.id].sel||[];
const a=ans[q.id].sel,p=a.indexOf(i);if(p>-1)a.splice(p,1);else if(a.length<mx)a.push(i);render()}

function submitQ(){
  stopQTimer();
  const q=QS[curQ];if(ans[q.id]?.done)return;
  let ok;
  if(q.multi){const s=(ans[q.id].sel||[]).sort(),c=[...q.c].sort();ok=s.length===c.length&&s.every((v,i)=>v===c[i]);}
  else ok=ans[q.id].sel===q.c;
  ans[q.id].done=true;ans[q.id].ok=ok;ans[q.id].me=ok?q.m:0;
  // accumulate question time on submit
  const dt=Math.floor((Date.now()-qStartTime)/1000);
  perQuestionTime[q.id]=(perQuestionTime[q.id]||0)+dt;
  qStartTime=Date.now();
  uScore();saveState();render();
}

function next(){if(curQ<QS.length-1){curQ++;render();window.scrollTo({top:0,behavior:'smooth'})}}
function prev(){if(curQ>0){curQ--;render();window.scrollTo({top:0,behavior:'smooth'})}}

function uScore(){earM=0;Object.values(ans).forEach(a=>{if(a.done&&a.me)earM+=a.me});
const shown=Math.min(earM,totM);
document.getElementById('tb-e').textContent=shown;
const p=Math.min(100,Math.round(shown/totM*100));document.getElementById('tb-fill').style.width=p+'%'}

// ═══ MTA ═══
function goMTA(){
  stopQTimer();
  const s=SRC['mta'];
  let html=`<div class="source-panel">
    <div class="sp-header"><span class="sp-label">${s.label}</span><span class="sp-type">${s.type}</span></div>
    ${s.html}<div class="sp-attr">${s.attr}</div></div>
  <div class="q-panel" style="min-height:auto">`;

  MTA_ANSWERS.forEach((a,ai)=>{
    html+=`<div style="margin:1.5rem 0">
    <div class="qp-meta"><span class="qp-num">${a.label}</span><span class="qp-marks" style="color:var(--gold);font-weight:700">Evaluate this answer</span></div>
    <div class="mta-box">${a.text}</div>
    <div id="rubric-${ai}">${a.crit.map((cr,ci)=>`
      <div class="rr"><span class="rl">${cr.q}</span>
      <div class="rbs">
        <button class="rb" onclick="markR(${ai},${ci},'yes')">Yes</button>
        <button class="rb" onclick="markR(${ai},${ci},'partial')">Partial</button>
        <button class="rb" onclick="markR(${ai},${ci},'no')">No</button>
      </div></div>
      <div class="fb" id="rfb-${ai}-${ci}"></div>`).join('')}</div>
    <div style="text-align:right;margin-top:.5rem"><button class="bs" id="mta-sub-${ai}" onclick="subMTA(${ai})">Check My Evaluation</button></div>
    <div class="fb" id="mta-fb-${ai}"></div></div>`;
  });

  html+=`<div class="nav-row">
    <button class="b2" onclick="curQ=QS.length-1;render();window.scrollTo({top:0,behavior:'smooth'})">← Back to questions</button>
    <button class="bs" onclick="showResults()">View Results →</button>
  </div></div>`;

  document.getElementById('app').innerHTML=html;
  document.getElementById('tb-sec').textContent='Mark This Answer';
  window.scrollTo({top:0,behavior:'smooth'});
}

function markR(ai,ci,val){
  mtaState[ai]=mtaState[ai]||{};mtaState[ai][ci]=val;
  const row=document.querySelectorAll(`#rubric-${ai} .rr`)[ci];
  row.querySelectorAll('.rb').forEach(b=>{b.classList.remove('ry','rn','rp');
  if(b.textContent.toLowerCase()===val)b.classList.add(val==='yes'?'ry':val==='no'?'rn':'rp')});
}

var bonusMarks=0;
function subMTA(ai){
  const a=MTA_ANSWERS[ai];const state=mtaState[ai]||{};let score=0;
  a.crit.forEach((cr,ci)=>{
    const uv=state[ci]||'';const ok=uv===cr.cor;if(ok)score++;
    const fb=document.getElementById(`rfb-${ai}-${ci}`);
    fb.className=`fb show ${ok?'fbg':'fbb'}`;
    fb.innerHTML=`<div class="fbl ${ok?'flg':'flb'}">${ok?'✓ Correct, 1 bonus mark':'✗ The answer is: '+cr.cor}</div><div>${cr.exp}</div>`;
  });
  bonusMarks+=score;
  const mfb=document.getElementById(`mta-fb-${ai}`);
  mfb.className='fb show fbg';
  mfb.innerHTML=`<div class="fbl flg">${score}/${a.crit.length} correct: ${score} bonus marks earned</div><div>This answer would earn approximately <strong>${ai===0?'4–5 marks (Level 2)':'7–8 marks (Level 3)'}</strong>. ${ai===0?'This answer shows understanding and uses source references, but lacks the analytical depth and clear causal argument needed for top marks.':'Strong synthesis: source evidence and own knowledge woven into a coherent argument with a clear line of reasoning.'}</div>`;
  document.getElementById(`mta-sub-${ai}`).classList.add('hidden');
  document.getElementById('tb-e').textContent=earM+(bonusMarks>0?' +'+bonusMarks+' bonus':'');
}

// ═══ RESULTS ═══
function showResults(){
  stopQTimer();
  if(totalTimerInterval){clearInterval(totalTimerInterval);totalTimerInterval=null;}
  const cappedEarM=Math.min(earM,totM);
  const p=Math.round(cappedEarM/totM*100);
  let g,gc,cm;
  if(p>=80){g='Level 7';gc='var(--ok)';cm='Outstanding. Thorough understanding of source analysis, interpretation, evaluation and synthesis.';}
  else if(p>=70){g='Level 6';gc='var(--ok)';cm='Meritorious. Strong source skills; refine evaluation and comparison for full marks.';}
  else if(p>=60){g='Level 5';gc='var(--blue-lt)';cm='Substantial. You handle extraction and interpretation well. Develop your evaluation and synthesis skills.';}
  else if(p>=50){g='Level 4';gc='var(--warn)';cm='Adequate. Extraction is solid. Focus on moving from WHAT to WHY: interpretation and evaluation.';}
  else if(p>=40){g='Level 3';gc='var(--warn)';cm='Moderate. You can find information but struggle with interpretation. Ask: what does this evidence MEAN?';}
  else if(p>=30){g='Level 2';gc='var(--bad)';cm='Elementary. Start with careful source reading and extraction before attempting higher-order questions.';}
  else{g='Level 1';gc='var(--bad)';cm='Not yet achieved. Focus on reading sources carefully to find specific information.';}

  let lb={1:{e:0,t:0},2:{e:0,t:0},3:{e:0,t:0}};
  QS.forEach(q=>{lb[q.lv].t+=q.m;if(ans[q.id]?.me)lb[q.lv].e+=ans[q.id].me});

  const fn=firstName();
  const heading=fn?'Well done, '+escHtml(fn):'Examination Complete';
  document.getElementById('app').innerHTML=`
  <div style="padding:1rem">
  <div class="rc">
    <div class="hero-ey" style="color:var(--red)">${heading}</div>
    <div class="rs-num" style="color:${gc}">${cappedEarM}</div>
    <div class="rt">out of ${totM} marks, ${p}%</div>
    <div style="font-family:'Playfair Display',serif;font-size:1.4rem;font-weight:700;color:${gc};margin-top:.8rem">${g}</div>
    <p style="margin-top:.6rem;font-size:.88rem;color:var(--txt2);max-width:500px;margin:auto">${cm}</p>
    <div style="margin-top:1rem;padding:.7rem 1.1rem;background:#FEF9E7;border:1px solid #D4A745;border-radius:4px;display:inline-block"><span style="font-size:.62rem;text-transform:uppercase;letter-spacing:.18em;font-weight:700;color:#D4A745">Bonus &middot; Mark This Answer</span><br><span style="font-family:Playfair Display,serif;font-size:1.6rem;font-weight:700;color:#D4A745">+${bonusMarks}</span><span style="font-size:.8rem;color:#5D6D7E"> / 12 extra</span></div>
  </div>
  <div style="text-align:center;margin-top:1.5rem">
    <button class="bs" onclick="location.reload()">Try Again</button>
    ${p>=70?`<div style="margin-top:1.5rem;padding:1.2rem;background:linear-gradient(135deg,#1B4F72,#2E86C1);border-radius:6px;text-align:center"><div style="font-size:.7rem;text-transform:uppercase;letter-spacing:.25em;color:#D4A745;font-weight:700;margin-bottom:.4rem">★ Bonus Section Unlocked</div><div style="color:#fff;font-size:.95rem;margin-bottom:.8rem">You scored ${p}%. Well done! You've unlocked the <strong>Mark This Answer</strong> bonus section. Evaluate two paragraph answers to earn up to 12 bonus marks.</div><button class="bs" style="background:#D4A745;color:#1C2733" onclick="goMTA()">Start Bonus Section →</button></div>`:`<div style="margin-top:1rem;padding:1rem;background:var(--frost);border:1px solid var(--bdr);border-radius:4px"><div style="font-size:.82rem;color:var(--txt2)"><strong>Bonus section locked.</strong> Score 70% or higher to unlock the Mark This Answer bonus section, where you can earn up to 12 extra marks by evaluating sample paragraph answers.</div></div>`}
    </div>
  </div>`;
  // ── Level breakdown bars + per-question time analytics + review-wrong button ──
  try{
    const wrong=QS.filter(q=>ans[q.id]&&ans[q.id].done&&!ans[q.id].ok);
    // top-time questions
    const times=Object.entries(perQuestionTime).map(([id,t])=>{
      const q=QS.find(qq=>qq.id===id);return q?{num:q.num,t:t}:null;
    }).filter(Boolean).sort((a,b)=>b.t-a.t).slice(0,3);
    const fmtT=s=>{const m=Math.floor(s/60),ss=s%60;return (m>0?m+'m ':'')+ss+'s';};
    const extra=document.createElement('div');
    extra.className='si';
    extra.style.cssText='background:var(--white);border:1px solid var(--bdr);border-radius:4px;margin:1rem';
    extra.innerHTML=
      '<h2>Level Score Bars</h2>'+
      [{l:'L1: Extraction/Concept',d:lb[1]},{l:'L2: Interpretation/Own knowledge',d:lb[2]},{l:'L3: Analysis/Comparison/Reliability',d:lb[3]}].map(x=>{
        const pct=x.d.t?Math.round(x.d.e/x.d.t*100):0;
        const col=pct>=70?'var(--ok)':pct>=40?'var(--warn)':'var(--bad)';
        return '<div class="lvl-bar"><span class="ll">'+x.l+'</span><span class="lt"><span class="lt-f" style="width:'+pct+'%;background:'+col+'"></span></span><span class="lv">'+x.d.e+'/'+x.d.t+' · '+pct+'%</span></div>';
      }).join('')+
      (times.length?('<h2 style="margin-top:1rem">Slowest Questions</h2><div class="time-list">'+times.map(t=>'<div class="ti"><span>Q'+t.num+'</span><span>'+fmtT(t.t)+'</span></div>').join('')+'</div>'):'')+
      (wrong.length?('<div style="text-align:center;margin-top:1rem"><button class="bs" onclick="reviewWrong()">Review Wrong Answers ('+wrong.length+')</button></div>'):'');
    document.querySelector('#app > div').appendChild(extra);
  }catch(e){}
  // Clear persisted state: exam complete
  try{localStorage.removeItem('cwo-june2025-v1');localStorage.removeItem(PERM_KEY);}catch(e){}
  // Add time to results
    var timeHtml=document.querySelector('.top-bar');
    if(timeHtml)timeHtml.classList.add('hidden');
  window.scrollTo({top:0,behavior:'smooth'});
}

// ═══ INIT ═══
document.getElementById('tb-t').textContent=totM;
document.getElementById('tb-qt').textContent=QS.length;

// Apply persisted theme BEFORE first render
(function initTheme(){
  try{
    const t=localStorage.getItem('cwo-theme');
    if(t==='dark')document.documentElement.setAttribute('data-theme','dark');
  }catch(e){}
})();

// Inject theme toggle into top bar
(function injectThemeToggle(){
  const bar=document.querySelector('.top-bar');if(!bar)return;
  const btn=document.createElement('button');
  btn.className='theme-toggle';btn.id='theme-toggle';
  btn.setAttribute('aria-label','Toggle dark mode');
  btn.title='Toggle dark mode';
  btn.textContent=document.documentElement.getAttribute('data-theme')==='dark'?'☀︎':'☾';
  btn.onclick=function(){
    const isDark=document.documentElement.getAttribute('data-theme')==='dark';
    if(isDark){document.documentElement.removeAttribute('data-theme');btn.textContent='☾';}
    else{document.documentElement.setAttribute('data-theme','dark');btn.textContent='☀︎';}
    try{localStorage.setItem('cwo-theme',isDark?'light':'dark');}catch(e){}
  };
  bar.appendChild(btn);
})();

// ── Persistence: save/load state ──
const STORE_KEY='cwo-june2025-v1';
function saveState(){
  try{
    // accumulate current question time before saving
    const liveDt = (qStartTime?Math.floor((Date.now()-qStartTime)/1000):0);
    localStorage.setItem(STORE_KEY,JSON.stringify({
      ans:ans, curQ:curQ, perQuestionTime:perQuestionTime,
      bonusMarks:bonusMarks, mtaState:mtaState,
      totalElapsedAt:Date.now(),
      totalStartTime:totalStartTime,
      version:1
    }));
  }catch(e){}
}
function loadState(){
  try{
    const raw=localStorage.getItem(STORE_KEY);if(!raw)return null;
    const o=JSON.parse(raw);if(!o||o.version!==1)return null;return o;
  }catch(e){return null;}
}
function clearState(){try{localStorage.removeItem(STORE_KEY);localStorage.removeItem(PERM_KEY);}catch(e){}}

// Patch sll/tmm/next/prev/markR/subMTA to persist
(function patchPersist(){
  const _sll=sll, _tmm=tmm, _next=next, _prev=prev, _markR=markR, _subMTA=subMTA;
  sll=function(i){_sll(i);saveState();};
  tmm=function(i,mx){_tmm(i,mx);saveState();};
  next=function(){_next();saveState();};
  prev=function(){_prev();saveState();};
  markR=function(a,c,v){_markR(a,c,v);saveState();};
  subMTA=function(a){_subMTA(a);saveState();};
  // expose globally
  window.sll=sll;window.tmm=tmm;window.next=next;window.prev=prev;
  window.markR=markR;window.subMTA=subMTA;
})();

// ── Source toggle handler (replaces inline onclick string) ──
function toggleSource(btn){
  const col=btn.nextElementSibling;if(!col)return;
  const isHidden=col.style.display==='none';
  col.style.display=isHidden?'block':'none';
  btn.textContent=isHidden?'▾ Hide source to focus on the question':'▸ Show source';
}
window.toggleSource=toggleSource;

// ── Review-wrong mode ──
var reviewMode=false, reviewQueue=[], reviewIdx=0, _origCurQ=null;
function reviewWrong(){
  const wrongIdx=QS.map((q,i)=>({q,i})).filter(x=>ans[x.q.id]&&ans[x.q.id].done&&!ans[x.q.id].ok).map(x=>x.i);
  if(!wrongIdx.length)return;
  reviewMode=true;reviewQueue=wrongIdx;reviewIdx=0;_origCurQ=curQ;
  // reset done flag so the question can be re-attempted; preserve original record
  wrongIdx.forEach(i=>{const id=QS[i].id;if(ans[id]){ans[id]._prev=Object.assign({},ans[id]);delete ans[id].done;delete ans[id].ok;delete ans[id].me;delete ans[id].sel;}});
  curQ=reviewQueue[reviewIdx];
  // restore top bar if hidden
  const tb=document.querySelector('.top-bar');if(tb)tb.classList.remove('hidden');
  render();
}
window.reviewWrong=reviewWrong;

// ── Keyboard shortcuts ──
document.addEventListener('keydown',function(e){
  // ignore when typing in input/textarea
  const tag=(e.target&&e.target.tagName||'').toLowerCase();
  if(tag==='input'||tag==='textarea'||e.target.isContentEditable)return;
  // ignore when start overlay is showing or any modal is open
  const startVis=document.getElementById('start-overlay');
  if(startVis&&startVis.style.display!=='none')return;
  if(document.querySelector('.modal-overlay.show'))return;
  // number keys 1-9: select option
  if(e.key>='1'&&e.key<='9'){
    const idx=parseInt(e.key,10)-1;
    const opts=document.querySelectorAll('#opts .ob');
    if(opts[idx]&&!opts[idx].disabled){opts[idx].click();e.preventDefault();}
    return;
  }
  if(e.key==='Enter'){
    const sub=document.getElementById('sub-btn');
    if(sub&&!sub.disabled){sub.click();e.preventDefault();return;}
    const q=QS[curQ];
    if(q&&ans[q.id]&&ans[q.id].done){
      // advance
      if(curQ<QS.length-1){next();e.preventDefault();}
    }
    return;
  }
  if(e.key==='ArrowLeft'){if(curQ>0){prev();e.preventDefault();}}
  else if(e.key==='ArrowRight'){
    const q=QS[curQ];
    if(q&&ans[q.id]&&ans[q.id].done&&curQ<QS.length-1){next();e.preventDefault();}
  }
});

// ── beforeunload guard ──
window.addEventListener('beforeunload',function(e){
  const anyAnswered=Object.values(ans).some(a=>a&&a.done);
  const completed=document.querySelector('.rc')!=null;
  if(anyAnswered&&!completed){e.preventDefault();e.returnValue='';return '';}
});

// ── Service worker registration + auto-reload when a fresh version takes over ──
if('serviceWorker' in navigator){
  try{
    navigator.serviceWorker.register('sw.js').catch(function(){});
    // When a new SW takes control, reload once so users immediately see the new code.
    let _reloaded=false;
    navigator.serviceWorker.addEventListener('message',function(ev){
      if(ev.data&&ev.data.type==='SW_UPDATED'&&!_reloaded){
        _reloaded=true;location.reload();
      }
    });
  }catch(e){}
}

// ── Resume / fresh-start flow ──
(function startFlow(){
  // Load persisted name and prefill input
  try{const n=localStorage.getItem(NAME_KEY);if(n){learnerName=n;}}catch(e){}
  const nameInp=document.getElementById('learner-name');
  if(nameInp){
    if(learnerName){nameInp.value=learnerName;}
    onNameInput();
  }
  const saved=loadState();
  const overlay=document.getElementById('start-overlay');
  // expose original beginExam, then replace
  const _beginExam=window.beginExam;
  window.beginExam=function(){
    clearState();
    ans={};curQ=0;earM=0;perQuestionTime={};mtaState={};bonusMarks=0;
    __lastRenderedQ=null;
    _beginExam();
    render();
  };
  window.resumeExam=function(){
    if(saved){
      ans=saved.ans||{};curQ=saved.curQ||0;
      perQuestionTime=saved.perQuestionTime||{};
      mtaState=saved.mtaState||{};
      bonusMarks=saved.bonusMarks||0;
    }
    overlay.style.display='none';
    startTotalTimer();
    startQTimer();
    uScore();
    render();
  };
  window.startOver=function(){clearState();window.beginExam();};

  if(saved && Object.keys(saved.ans||{}).length>0){
    // Show resume prompt by injecting into existing start overlay
    const bd=overlay.querySelector('.sm-bd');
    if(bd){
      const answered=Object.values(saved.ans).filter(a=>a&&a.done).length;
      const resumeBox=document.createElement('div');
      resumeBox.className='coach-box';
      resumeBox.style.background='linear-gradient(135deg,#1B4F72,#2E86C1)';
      const fn=firstName();
      const welcome=fn?('Welcome back, '+escHtml(fn)+'. Resume your previous attempt?'):'Resume your previous attempt?';
      resumeBox.innerHTML='<div class="coach-title">'+welcome+'</div>'+
        '<p>You answered <strong>'+answered+'</strong> question'+(answered!==1?'s':'')+' last time. Pick up where you left off, or start fresh.</p>'+
        '<div style="display:flex;gap:.5rem;margin-top:.6rem"><button class="bs" style="flex:1" onclick="resumeExam()">Resume</button>'+
        '<button class="b2" style="flex:1;background:rgba(255,255,255,.1);color:#fff;border-color:rgba(255,255,255,.3)" onclick="startOver()">Start Over</button></div>';
      bd.insertBefore(resumeBox, bd.firstChild);
    }
  }
  // Keyboard shortcuts hint at bottom of overlay
  const bd2=overlay.querySelector('.sm-bd');
  if(bd2){
    const hint=document.createElement('div');
    hint.className='kbd-hint';
    hint.innerHTML='Tip: use <kbd>1</kbd>–<kbd>9</kbd> to choose options, <kbd>Enter</kbd> to submit/next, <kbd>←</kbd>/<kbd>→</kbd> to navigate.';
    bd2.appendChild(hint);
  }
})();

render();

