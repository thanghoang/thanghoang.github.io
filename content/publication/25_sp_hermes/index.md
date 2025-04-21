---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Hermes: Efficient and Secure Multi-Writer Encrypted Database"
authors: [Tung Le*, Thang Hoang]
date: 2025-05-12T00:00:00-07:00
doi: ""
highlight: 1
#award: "Best Paper Award"





# Schedule page publish date (NOT publication's date).
publishDate: 2025-03-10T00:00:00-07:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "IEEE Symposium on Security and Privacy"
publication_short: "S&P"

abstract: "Searchable encryption (SE) enables privacy-preserving keyword search on encrypted data. Public-key SE (PKSE) supports multi-user searches but suffers from high search latency due to expensive public-key operations. Symmetric SE (SSE) offers a sublinear search but is mainly limited to single-user settings. Recently, hybrid SE (HSE) has combined SSE and PKSE to achieve the best of both worlds, including multi-writer encrypted search functionalities, forward privacy, and sublinear search with respect to database size. Despite its advantages, HSE inherits critical security limitations, such as susceptibility to dictionary attacks, and still incurs significant overhead for search access control verification, requiring costly public-key operation invocations (i.e., pairing) across all authorized keywords. Additionally, its search access control component must be rebuilt periodically for forward privacy, imposing substantial writer overhead. \\ 

In this paper, we propose Hermes, a new HSE scheme that addresses the aforementioned security issues in prior HSE designs while maintaining minimal search complexity and user efficiency at the same time. Hermes enables multi-writer encrypted search functionalities and offers forward privacy along with resilience to dictionary attacks. To achieve this, we develop a new identity-based encryption scheme with hidden identity and key-aggregate properties, which could be of independent interest. We also design novel partitioning and epoch encoding techniques in Hermes to minimize search complexity and offer low user overhead in maintaining forward privacy. We conducted intensive experiments to assess and compare the performance of Hermes and its counterpart on commodity hardware. Experimental results showed that Hermes performs search one to two orders of magnitude faster than the state-of-the-art HSE while offering stronger security guarantees to prevent dictionary and injection attacks."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: 
url_code: https://github.com/vt-asaplab/hermes
url_dataset: 
url_poster:
url_project:
url_slides: 
url_source:
url_video:

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
