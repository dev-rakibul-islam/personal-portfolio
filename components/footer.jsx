export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-foreground">
            Rakibul
            <span className="text-primary">.</span>
          </span>
        </div>

        <p className="text-sm text-muted-foreground text-center">
          {"Designed & Built by Rakibul Islam. All rights reserved"} &copy;{" "}
          {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ri5257"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rakibul-islam-6258541b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/dev_rakib_eb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}
