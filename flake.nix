{
  description = "business-card-website dev environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          packages = [
            pkgs.nodejs_24
          ];

          shellHook = ''
            echo "Node $(node -v) / npm $(npm -v)"
            echo "Run 'npm install' (first time) then 'npm run dev'."
            # nix develop starts bash; hand off to zsh for interactive sessions
            if [[ $- == *i* ]] && [ -z "$IN_NIX_ZSH" ] && command -v zsh >/dev/null; then
              export IN_NIX_ZSH=1
              exec zsh
            fi
          '';
        };
      });
}
