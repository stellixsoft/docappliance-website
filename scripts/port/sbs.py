import sys
from PIL import Image, ImageChops
live, local, out = sys.argv[1:4]
a=Image.open(live).convert('RGB'); b=Image.open(local).convert('RGB')
h=max(a.height,b.height); w=a.width
c=Image.new('RGB',(w*2+20,h),'red'); c.paste(a,(0,0)); c.paste(b,(w+20,0))
# diff score on overlapping region
hh=min(a.height,b.height)
d=ImageChops.difference(a.crop((0,0,w,hh)),b.crop((0,0,w,hh))).convert('L')
bad=sum(1 for p in d.getdata() if p>40)
print(f'{out}: live {a.size} local {b.size} diffpx {bad/(w*hh)*100:.1f}%')
c.save(out)
