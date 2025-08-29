## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-05 QUESTIONS ANSWERS || 😍

## Answer to Question 1 :

🟩 getElementById --> JavaScript-DOM **(Document Object Model)** এর একটা গুরুত্বপূর্ণ মেথড যা নির্দিষ্ট **Element** খুঁজতে মূলত এটা ব্যবহার করা হয়। একাধিক হলে **১ টাই** ফেরত দিবে আর না থাকলে **Null** ফেরত দিবে।

🟩 getElementsByClassName --> এটাও JavaScript-DOM **(Document Object Model)** এর একটা গুরুত্বপূর্ণ মেথড যা দিয়ে একাধিক **Element** খুঁজতে ব্যবহার করা হয়। একাধিক পাওয়া গেলে **Array** এর মতো খুঁজে দিবে আর না থাকলে **Empty Array** ফেরত দিবে।

🟩 querySelector --> querySelector **মূলত CSS সিলেক্ট**। এটা দিয়ে CSS এর মতো করে **class, id, tag, attribute** খুঁজে বের করা যায়। তবে একাধিক হলে প্রথমটা ফেরত দিবে আর না থাকলে Null ফেরত দিবে।

🟩 querySelectorAll --> এটাও JavaScript-DOM এর একটা গুরুত্বপূর্ণ মেথড যা দিয়ে **class, id, tag, attribute** (CSS) সিলেক্টরের মতো খুঁজে পাওয়া যায়। একাধিক থাকলে **Array** এর মতো খুঁজে দিবে আর না থাকলে **Empty Array** ফেরত দিবে।

🟨 **পরিশেষে getElementsByClassName (HtmlCollection) Return করে এবং QuerySelectorAll (Node List) Return করে**।

## Answer to Question 2 :

🟩 নতুন Element তৈরি করার ক্ষেত্রে **document.createElement()** ব্যবহার করা হয়। এবং এটাকে UI তে দেখতে Parent এর ভেতর Child হিসেবে **AppendChild** করা লাগে।

## Answer to Question 3 :

🟩 ইভেন্ট বাবলিং হলো DOM **(Document Object Model)** এর একটি অংশ বা ধাপ যা মূলত কোনো Child element এ ইভেন্ট **(Event)** ঘটলে প্রথম সেখানে কাজ করে তার পর তার **Parent** এবং তার **Parent** এবং তার **Parent** এভাবে সে **Document** পর্যন্ত যায়। এভাবেই **Bubbling** কাজ করে।

## Answer to Question 4 :

🟩 জাভাস্ক্রিপ্টে **ইভেন্ট ডেলিগেশন** হল একটা **টেকনিক** যা দিয়ে আমরা Child element এ ইভেন্ট লিসেনার **(eventListener)** না বসিয়ে তার Parent এ ইভেন্ট লিসেনার বসাই। এর মানে প্রতিটি Child element এ ইভেন্ট লিসেনার না বসিয়ে Parent এ বসাই। এর ফলে পারফরম্যান্স ভালো হয়, মেমোরি কম লাগে, ডায়নামিক হয়, বেশি কোড করা লাগে না।

## Answer to Question 5 :

🟩 **preventDefault()** লাগে মূলত **(HTML) Form** এর ভেতর **Button** এর টাইপ দেওয়া না থাকলে By default Form সেটাকে **সাবমিট (submit)** টাইপ বাটন বলে ধরে নেয়। এবং জাভাস্ক্রিপ্টে **eventListener** এড করার পর Button এ click করলে সাবমিট বাটনের মতো **behavior** করে। তখন eventListener এর function এ Parameter নিয়ে **parameter.preventDefault()** দিলে সেটা বাটনের মতো behavior করে। আর **stopPropagation()** মূলত **Delegation** থামাতে ব্যবহার করা হয়। **stopPropagation()** এর ফলে Delegation করে **Child** তার **Parent** পর্যন্ত আর যেতে পারে না।

## ⭐ Author **( Md. Sohel Rana )**
