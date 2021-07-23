import{r as a,a4 as n,o as s,b as t,d as p,w as e,a5 as l,h as o,i as c}from"./app.6788db77.js";import{_ as u}from"./Datepicker.a26774d7.js";const i=o('<h1 id="examples"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h1><h2 id="styling"><a class="header-anchor" href="#styling" aria-hidden="true">#</a> Styling</h2><p>For styling examples, see <a href="/config.html#styling-example-and-playground">Configuration section</a>.</p><h2 id="basic-usage"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic usage</h2>',4),k=o('<details><summary>Code for this example</summary><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> Datepicker <span class="token keyword">from</span> <span class="token string">&#39;../src/datepicker/Datepicker.vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">const</span> picked <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>datepicker</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>picked<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div></details><h2 id="upper-and-lower-limits"><a class="header-anchor" href="#upper-and-lower-limits" aria-hidden="true">#</a> Upper and lower limits</h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If limit is within the current &quot;view&quot; (e.g. a month), then view changing will be prohibited.</p></div><p>Settings:</p>',4),r=c("Upper limit: "),d=c("Lower limit: "),m=p("p",null,"Result:",-1),g=o('<details><summary>Code for this example</summary><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> Datepicker <span class="token keyword">from</span> <span class="token string">&#39;../src/datepicker/Datepicker.vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">const</span> example2 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> example2_from <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> example2_to <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>datepicker</span>\n    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example2<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:upper-limit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example2_to<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:lower-limit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example2_from<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div></details><h2 id="disabled-dates"><a class="header-anchor" href="#disabled-dates" aria-hidden="true">#</a> Disabled dates</h2><p>Settings:</p>',3),v=c("Disabled date: "),w=p("p",null,"Result:",-1),y=o('<details><summary>Code for this example</summary><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> Datepicker <span class="token keyword">from</span> <span class="token string">&#39;../src/datepicker/Datepicker.vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> add <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;date-fns&#39;</span>\n<span class="token keyword">const</span> pickedDate <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> disabledDate <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> days<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>datepicker</span>\n    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pickedDate<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:disabledDates</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ dates: [disabledDate] }<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div></details><h2 id="starting-view"><a class="header-anchor" href="#starting-view" aria-hidden="true">#</a> Starting view</h2><p>Settings:</p>',3),_=c("Starting view: "),h=p("code",null,"day",-1),f=c(),D=c("Starting view: "),b=p("code",null,"month",-1),q=c(),V=c("Starting view: "),T=p("code",null,"year",-1),S=c(),x=c("Result: "),C=p("h2",{id:"clearable"},[p("a",{class:"header-anchor",href:"#clearable","aria-hidden":"true"},"#"),c(" Clearable")],-1),A=p("p",null,"Settings:",-1),U=c("Clear date: "),I=p("p",null,"Result:",-1),P=o('<details><summary>Code for this example</summary><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> Datepicker <span class="token keyword">from</span> <span class="token string">&#39;../src/datepicker/Datepicker.vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">const</span> pickedDate <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>datepicker</span>\n    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pickedDate<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:clearable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div></details><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>We can customize clearable view with <code>slot</code> for example:</p></div><details><summary>Code for this example</summary><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> Datepicker <span class="token keyword">from</span> <span class="token string">&#39;../src/datepicker/Datepicker.vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">const</span> pickedDate <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>datepicker</span>\n    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pickedDate<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:clearable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>clear</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ onClear }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClear<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>x<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>datepicker</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div></details>',3),R='{"title":"Examples","description":"","frontmatter":{},"headers":[{"level":2,"title":"Styling","slug":"styling"},{"level":2,"title":"Basic usage","slug":"basic-usage"},{"level":2,"title":"Upper and lower limits","slug":"upper-and-lower-limits"},{"level":2,"title":"Disabled dates","slug":"disabled-dates"},{"level":2,"title":"Starting view","slug":"starting-view"},{"level":2,"title":"Clearable","slug":"clearable"}],"relativePath":"examples.md","lastUpdated":1627061330568}',j={};const E=Object.assign(j,{expose:[],setup:function(o){const c=a(new Date),R=a(new Date),j=a(n(new Date,{days:-7})),E=a(n(new Date,{days:7})),N=a(new Date),B=a(n(new Date,{days:1})),z=a(new Date),F=a("day");return(a,n)=>(s(),t("div",null,[i,p(u,{modelValue:c.value,"onUpdate:modelValue":n[1]||(n[1]=a=>c.value=a)},null,8,["modelValue"]),k,p("ul",null,[p("li",null,[r,p(u,{modelValue:j.value,"onUpdate:modelValue":n[2]||(n[2]=a=>j.value=a)},null,8,["modelValue"])]),p("li",null,[d,p(u,{modelValue:E.value,"onUpdate:modelValue":n[3]||(n[3]=a=>E.value=a)},null,8,["modelValue"])])]),m,p(u,{modelValue:R.value,"onUpdate:modelValue":n[4]||(n[4]=a=>R.value=a),"upper-limit":E.value,"lower-limit":j.value},null,8,["modelValue","upper-limit","lower-limit"]),g,p("ul",null,[p("li",null,[v,p(u,{modelValue:B.value,"onUpdate:modelValue":n[5]||(n[5]=a=>B.value=a)},null,8,["modelValue"])])]),w,p(u,{modelValue:N.value,"onUpdate:modelValue":n[6]||(n[6]=a=>N.value=a),disabledDates:{dates:[B.value]}},null,8,["modelValue","disabledDates"]),y,p("ul",null,[p("li",null,[p("label",null,[_,h,f,e(p("input",{type:"radio","onUpdate:modelValue":n[7]||(n[7]=a=>F.value=a),value:"day"},null,512),[[l,F.value]])])]),p("li",null,[p("label",null,[D,b,q,e(p("input",{type:"radio","onUpdate:modelValue":n[8]||(n[8]=a=>F.value=a),value:"month"},null,512),[[l,F.value]])])]),p("li",null,[p("label",null,[V,T,S,e(p("input",{type:"radio","onUpdate:modelValue":n[9]||(n[9]=a=>F.value=a),value:"year"},null,512),[[l,F.value]])])])]),p("p",null,[x,p(u,{modelValue:z.value,"onUpdate:modelValue":n[10]||(n[10]=a=>z.value=a),"starting-view":F.value},null,8,["modelValue","starting-view"])]),C,A,p("ul",null,[p("li",null,[U,p(u,{clearable:!0})])]),I,p(u,{modelValue:N.value,"onUpdate:modelValue":n[11]||(n[11]=a=>N.value=a),clearable:!0},null,8,["modelValue"]),P]))}});export default E;export{R as __pageData};
